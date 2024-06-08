import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faThumbsUp, faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';

const CTFChallenges = () => {
  const { user } = useContext(UserContext);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [hideSolved, setHideSolved] = useState(false);
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get('http://localhost:3001/challenges');
        setChallenges(response.data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, []);

  const openModal = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const closeModal = () => {
    setSelectedChallenge(null);
  };

  const filteredChallenges = challenges
    .filter(challenge => {
      if (hideSolved && challenge.completed) return false;
      if (showBookmarked && !challenge.bookmarked) return false;
      if (selectedCategory && challenge.category !== selectedCategory) return false;
      if (searchTerm && !challenge.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    })
    .reduce((acc, challenge) => {
      if (!acc[challenge.category]) {
        acc[challenge.category] = [];
      }
      acc[challenge.category].push(challenge);
      return acc;
    }, {});

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col">
      <Header />
      <div className="flex flex-col items-center flex-grow relative">
        <div className="w-full bg-neutral-800 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-center flex-grow">MonSec CTF Challenges</h1>
          {user && (
            <div className="text-xl">
              CTF Score: {user.ctfScore || 0}
            </div>
          )}
        </div>
        <div className="absolute left-0 top-24"> {/* Adjusted position */}
          <button
            className={`filter-tab ${filterOpen ? 'open' : ''}`}
            onClick={() => setFilterOpen(!filterOpen)}
            style={{
              backgroundColor: '#1f2937',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              position: 'absolute',
              left: filterOpen ? '250px' : '0',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'left 0.3s ease',
            }}
          >
            Filters
          </button>
        </div>
        <CSSTransition
          in={filterOpen}
          timeout={300}
          classNames="filter-panel"
          unmountOnExit
        >
          <div
            className="filter-panel"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '250px',
              height: '100%',
              backgroundColor: '#1f2937',
              padding: '1rem',
              zIndex: 5,
              transition: 'transform 0.3s ease',
              transform: filterOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}
          >
            <h3 className="text-xl font-bold mb-2">Filter Options</h3>
            <div className="mb-4">
              <label className="block mb-2">
                <input
                  type="checkbox"
                  checked={hideSolved}
                  onChange={(e) => setHideSolved(e.target.checked)}
                  className="mr-2"
                />
                Hide Solved
              </label>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  checked={showBookmarked}
                  onChange={(e) => setShowBookmarked(e.target.checked)}
                  className="mr-2"
                />
                Show Bookmarked
              </label>
            </div>
            <div className="mb-4">
              <div className="flex items-center bg-neutral-800 text-neutral-50 p-2 rounded">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-neutral-800 text-neutral-50 flex-1"
                />
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Category</label>
              <select
                className="bg-neutral-800 text-neutral-50 p-2 rounded w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories ({challenges.length})</option>
                {Object.entries(filteredChallenges).map(([category, challengeList]) => (
                  <option key={category} value={category}>
                    {category} ({challengeList.length})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CSSTransition>
        <div className="w-full max-w-5xl bg-neutral-800 p-8 rounded-lg shadow-md mt-8 flex-grow">
          {Object.entries(filteredChallenges).map(([category, challenges]) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              {challenges.length === 0 ? (
                <p>No challenges available.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-neutral-700 p-6 rounded-lg shadow-md cursor-pointer hover:bg-neutral-600 relative flex flex-col justify-center"
                      style={{ height: '250px' }}  // Adjust the height here
                      onClick={() => openModal(challenge)}
                    >
                      <div className="absolute top-4 left-4 text-neutral-400">
                        {category}
                      </div>
                      <div className="absolute top-4 right-4 text-neutral-400 flex items-center">
                        <FontAwesomeIcon icon={challenge.completed ? faCheckCircle : faTimesCircle} className="mr-2" />
                        {challenge.points} points
                      </div>
                      <p className="text-lg font-bold text-center">{challenge.name}</p>
                      <div className="absolute bottom-4 left-4 text-neutral-400">
                        {challenge.solves} solves
                      </div>
                      <div className="absolute bottom-4 right-4 text-neutral-400 flex items-center">
                        {challenge.likes}% <FontAwesomeIcon icon={faThumbsUp} className="ml-2" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {selectedChallenge && (
        <Modal
          isOpen={!!selectedChallenge}
          onRequestClose={closeModal}
          className="bg-neutral-800 text-neutral-50 max-w-lg mx-auto p-8 rounded-lg shadow-lg relative"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        >
          <button onClick={closeModal} className="absolute top-4 right-4 text-neutral-50">
            &times;
          </button>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedChallenge.name}</h2>
              <button className="text-neutral-400 ml-2">
                <FontAwesomeIcon icon={faBookmark} />
              </button>
              <div className="flex flex-wrap mt-2">
                <span className="bg-blue-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">MonSec CTF S2 2024</span>
                <span className="bg-gray-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{selectedChallenge.category}</span>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={selectedChallenge.completed ? faCheckCircle : faTimesCircle} className="mr-2" />
              {selectedChallenge.points} points
            </div>
          </div>
          <hr className="my-4" />
          <div className="mb-4 text-sm text-neutral-400">
            <p>Author: Sarah Lam</p>
          </div>
          <h3 className="text-xl font-bold mb-2">Description</h3>
          <p className="mb-4">{selectedChallenge.description}</p>
          <div className="text-xl font-bold mb-2">Hints</div>
          <div className="flex space-x-2 mb-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded">1</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">2</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">3</button>
          </div>
          <hr className="my-4" />
          <div className="bg-neutral-700 p-4 rounded mb-4">
            <p>{selectedChallenge.solves} users solved</p>
            <p>{selectedChallenge.likes}% Liked</p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="MonSecCTF{FLAG}"
              className="flex-1 border bg-neutral-800 text-white p-2 rounded mr-4"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit Flag
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CTFChallenges;
