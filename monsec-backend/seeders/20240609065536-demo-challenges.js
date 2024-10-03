'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Challenges', [
      {
        name: 'Salad Cipher',
        category: 'Cryptography',
        points: 50,
        solves: 100,
        likes: 90,
        completed: true,
        description: 'I was trying to make a secret message and ended up making a "salad.txt"... Can you make any sense of it?',
        author: 'Sarah Lam',
        flag: 'MONSEC{ET_TU_BRUTE}',
        filePaths: 'CTF-Downloads/Cryptography/SaladCipher.zip',
        hints: 'Hint 1. What do salads, Romans and Shakespeare have in common?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Of-fence-ive Security',
        category: 'Cryptography',
        points: 50,
        solves: 80,
        likes: 75,
        completed: false,
        description: 'Ive made an unbreakable code! Now I can store all my secret.txt in this code... \n\nWrap the decoded message with MONSEC{} to get the flag.',
        author: 'Sarah Lam',
        flag: 'MONSEC{NEXTTIMEILLTRYRSA}',
        filePaths: 'CTF-Downloads/Cryptography/Of-fence-iveSecurity.zip',
        hints: 'Hint 1. Have you heard of the rail fence cipher?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mystery Cat',
        category: 'Digital Forensics',
        points: 50,
        solves: 120,
        likes: 95,
        completed: true,
        description: 'This cat.jpg is so cute that it can\'t be hiding a secret... Could it?',
        author: 'Sarah Lam',
        flag: 'MONSEC{sleepyhead}',
        filePaths: 'CTF-Downloads/Digital Forensics/MysteryCat.zip',
        hints: 'Hint 1. I wonder who owns the cat?\nHint 2. Do you know what metadata is?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stegosaurus',
        category: 'Digital Forensics',
        points: 100,
        solves: 60,
        likes: 50,
        completed: false,
        description: 'This stegosaurus.jpg is hiding a secret... Can you find it? \n\nThe password is the year MonSec was founded.',
        author: 'Sarah Lam',
        flag: 'MONSEC{h1d3_4nd_533k}',
        filePaths: 'CTF-Downloads/Digital Forensics/Stegosaurus.zip',
        hints: 'Hint 1. You\'ll need a special tool to get the secret out\nHint 2. How do you hide files in images?\nHint 3. https://steghide.sourceforge.net/ is a really useful tool',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sanity Check',
        category: 'General Skills',
        points: 5,
        solves: 200,
        likes: 180,
        completed: true,
        description: 'Download flag.txt and find the flag.',
        author: 'Sarah Lam',
        flag: 'MONSEC{g00d_luck_h4v3_fun!}',
        filePaths: 'CTF-Downloads/General Skills/SanityCheck.zip',
        hints: 'Hint 1: None',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Debugging',
        category: 'General Skills',
        points: 50,
        solves: 150,
        likes: 130,
        completed: false,
        description: 'I was trying to decode this flag but there\'s a bug in [my code] and I can\'t seem to get the right answer... Can you fix it?',
        author: 'Sarah Lam',
        flag: 'MONSEC{u_f0und_th3_bug!}',
        filePaths: 'CTF-Downloads/General Skills/Debugging.zip',
        hints: 'Hint 1. What three arguments can range() take?\nHint 2. What happens if you change the numbers?\nHint 3. What happens if you change the third number?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gift Horse',
        category: 'General Skills',
        points: 50,
        solves: 140,
        likes: 110,
        completed: true,
        description: 'What is the (shortform) name of the type of malware that can infiltrate systems by disguising itself as legitimate software?\n\nWrite it in capital letters and wrap it in the MONSEC{} wrapper to get the flag.',
        author: 'Sarah Lam',
        flag: 'MONSEC{TROJAN}',
        filePaths: 'CTF-Downloads/General Skills/GiftHorse.zip',
        hints: 'Hint 1: None',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Happily Ever After',
        category: 'General Skills',
        points: 100,
        solves: 70,
        likes: 60,
        completed: false,
        description: 'I found this strange file but I cant seem to open it. Maybe you can find a way to read it.',
        author: 'Sarah Lam',
        flag: 'MonSecCTF{HappilyEverAfterFlag}',
        filePaths: 'CTF-Downloads/General Skills/HappilyEverAfter.zip',
        hints: 'Hint 1. Have you checked the header?\nHint 2. What type of file is it really?\nHint 3. This is harder to do on MacOS than it is on Windows, generally speaking.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hometown',
        category: 'OSINT',
        points: 50,
        solves: 160,
        likes: 140,
        completed: true,
        description: 'I took this photo while visiting my friend\'s hometown. Do you know where they live?\n\nThe flag is the name of the city in all capitals (in which the photo is taken) wrapped in the MONSEC{} wrapper. For example, if the photo was taken in Berlin, it would be MONSEC{BERLIN}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{MELBOURNE}',
        filePaths: 'CTF-Downloads/OSINT/Hometown.zip',
        hints: 'Hint 1. Do you recognise any of the buildings/landmarks?\nHint 2. Can you use any text found in the image?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinner Recommendation',
        category: 'OSINT',
        points: 50,
        solves: 150,
        likes: 130,
        completed: false,
        description: 'A friend recommended [this place](dinner.jpg) for dinner but I can\'t remember the address- I only have this picture of the front door. Can you work out where it is?\n\nThe flag is the name of the street/road/court/etc in capital letters, wrapped with the MONSEC{} wrapper. For example, if the answer was Smith Boulevard, the answer would be MONSEC{SMITH} or if it was Lupton Street, it would be MONSEC{LUPTON}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{CELESTIAL}',
        filePaths: 'CTF-Downloads/OSINT/DinnerRecommendation.zip',
        hints: 'Hint 1. What text is visible in the image?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Holiday Snaps',
        category: 'OSINT',
        points: 100,
        solves: 80,
        likes: 70,
        completed: true,
        description: 'I was looking through my photo album and found [this picture](holiday.jpg) that I took while on holiday. However, I can\'t remember where I took the photo. Can you find out where I took the photo?\n\nThe flag is the name of the city in all capitals wrapped in the MONSEC{} wrapper. For example, if the photo was taken in Berlin, it would be MONSEC{BERLIN}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{PORTREE}',
        filePaths: 'CTF-Downloads/OSINT/HolidaySnaps.zip',
        hints: 'Hint 1. Ever used reverse image search?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crowded',
        category: 'OSINT',
        points: 100,
        solves: 90,
        likes: 80,
        completed: false,
        description: 'My friend sent me [this picture](crowded.jpg) a while ago. I think they were at some kind of event. Can you work out when the photo was taken?\n\nThe flag is the year the photo was taken, wrappd in the MONSEC{} wrapper. For example, if the image was taken in 2024, the flag would be MONSEC{2024}',
        author: 'Sarah Lam',
        flag: 'MONSEC{2022}',
        filePaths: 'CTF-Downloads/OSINT/Crowded.zip',
        hints: 'Hint 1. What text can you see?\nHint 2. What can you learn from what the crowd is wearing?\nHint 3. How\'s your F1 knowledge?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sunrise',
        category: 'OSINT',
        points: 100,
        solves: 100,
        likes: 90,
        completed: true,
        description: 'What a lovely sunrise. I wonder where the photo was taken?\n\nThe flag is the country in which the photo was taken, in all capitals, wrapped in the MONSEC{} wrapper. For example, if the photo was taken in Sweden, the flag would be MONSEC{SWEDEN}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{VANUATU}',
        filePaths: 'CTF-Downloads/OSINT/Sunrise.zip',
        hints: 'Hint 1. How can you see where a photo was taken?\nHint 2. Where is geolocation data stored in an image?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beach',
        category: 'OSINT',
        points: 100,
        solves: 110,
        likes: 100,
        completed: false,
        description: 'This looks like a nice, sunny beach. Can you work out where it is?\n\nThe flag is the area postcode wrapped in the MONSEC{} wrapper. For example, if the postcode was 0011, the flag would be MONSEC{0011}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{5022}',
        filePaths: 'CTF-Downloads/OSINT/Beach.zip',
        hints: 'Hint 1. What text is visible in the image?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vista Point',
        category: 'OSINT',
        points: 200,
        solves: 40,
        likes: 30,
        completed: true,
        description: 'What a pretty vista! I wonder which city this photo was taken in?\n\nThe flag is the name of the city in all capitals wrapped in the MONSEC{} wrapper. For example, if the photo was taken in Berlin, it would be MONSEC{BERLIN}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{PARIS}',
        filePaths: 'CTF-Downloads/OSINT/VistaPoint.zip',
        hints: 'Hint 1. What landmarks can you recognise?\nHint 2. What about the style of the buildings?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'My City',
        category: 'OSINT',
        points: 200,
        solves: 50,
        likes: 40,
        completed: false,
        description: 'Hmmmm, this place looks familiar but I can\'t quite remember where it is. Do you know?\n\nThe flag is the name of the city in all capitals (in which the photo is taken) wrapped in the MONSEC{} wrapper. For example, if the photo was taken in Berlin, it would be MONSEC{BERLIN}.',
        author: 'Sarah Lam',
        flag: 'MONSEC{LONDON}',
        filePaths: 'CTF-Downloads/OSINT/MyCity.zip',
        hints: 'Hint 1. What landmarks can you recognise?\nHint 2. Is any text visible?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nature',
        category: 'OSINT',
        points: 200,
        solves: 60,
        likes: 50,
        completed: true,
        description: 'It might not seem like much but this is a famous landmark. Do you know what it is?\n\nThe flag is the native name of the landmark in all capitals (in which the photo is taken) wrapped in the MONSEC{} wrapper. For example, if the photo was of Ayres Rock, the \'native name\' would be Uluru and the flag would be MONSEC{ULURU}',
        author: 'Sarah Lam',
        flag: 'MONSEC{CUITH-RAING}',
        filePaths: 'CTF-Downloads/OSINT/Nature.zip',
        hints: 'Hint 1. You might have to do some research\nHint 2. Don\'t forget the hyphen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secure Password Hasher 1',
        category: 'Reverse Engineering',
        points: 50,
        solves: 130,
        likes: 110,
        completed: true,
        description: 'I have created a new, secure [password hasher](ultimateHasher1.py)! This means that even if you have my password, I can hash it so you\'ll never be able to use it... Right?\n\nMy password: 92.94.93.98.84.82.138.93.63.99.110.101.66.97.104.110.98.66.82.100.97.66.140.',
        author: 'Sarah Lam',
        flag: 'MONSEC{N0T_V3RY_S3CUR3}',
        filePaths: 'CTF-Downloads/Reverse Engineering/SecurePasswordHasher1.zip',
        hints: 'Hint 1. Can you figure out what each line of code is doing? You might have to look it up!\nHint 2. ord() can turn a character into a number.\nHint 3. You could do this without code, since it\'s effectively a weak substitution cipher.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'XOR-cise',
        category: 'Reverse Engineering',
        points: 50,
        solves: 120,
        likes: 100,
        completed: false,
        description: 'Do you know how XOR works?\n\nCode: [xor.py](xor.py)\nFlag: 56!H0=(1\nKey: mysecret\n\nYou\'ll need to wrap the decrypted message in the MONSEC{} wrapper.',
        author: 'Sarah Lam',
        flag: 'MONSEC{XOR-SOME}',
        filePaths: 'CTF-Downloads/Reverse Engineering/XOR-Cise.zip',
        hints: 'Hint 1. https://medium.com/@epipo555/simple-cipher-fe248201833f#:~:text=The%20reverse%20of%20any%20xor,you%20back%20where%20you%20started.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secure Password Hasher 2',
        category: 'Reverse Engineering',
        points: 100,
        solves: 90,
        likes: 70,
        completed: true,
        description: 'Okay, I think I\'ve learnt from my mistakes now. This new and improved hasher should be uncrackable because it\'s totally random!\n\nMy password: RChGHXjl~eyHKQm{PldCKJqgw',
        author: 'Sarah Lam',
        flag: 'MONSEC{OnLY_PsEuDOraNDoM}',
        filePaths: 'CTF-Downloads/Reverse Engineering/SecurePasswordHasher2.zip',
        hints: 'Hint 1. Is it really random?\nHint 2. What does a seed do?\nHint 3. Look at the XOR-cise challenge if you\'re stuck reversing the ciphertext',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secrets',
        category: 'Web Exploitation',
        points: 50,
        solves: 90,
        likes: 70,
        completed: true,
        description: 'This website is so boring and definitely doesn\'t have any secrets!',
        author: 'Sarah Lam',
        flag: 'MONSEC{o_n0_u_f0unD_mY_S3cr3ts!}',
        filePaths: 'CTF-Downloads/Web Exploitation/Secrets.zip',
        hints: 'Hint 1. Is this the only page that exists?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Challenges', null, {});
  }
};