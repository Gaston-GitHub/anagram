const Anagram = require('./index')


describe('Anagram', () => {
    let anagram;
    beforeAll(() => {
        anagram = new Anagram({
            'estt': ['test', 'test', 'test', 'etst', 'ttse'],
        }); 
    });

    test('should sortLetters() correct sort', () => {
        let word = anagram.sortLetters('test');
        expect(word).toBe('estt');
    });

    test('should not sortLetters() correct sort', () => {
        let word = anagram.sortLetters('test');
        expect(word).not.toBe('test');
    });

    test('should correct findAllAnagrams(input)', () => {
        let result = anagram.findAllAnagrams('test');
        let resultToBe = ['test', 'test', 'test', 'etst', 'ttse'];
        expect(result).toEqual(resultToBe);
    })

    test('should correct findAllAnagrams(input) no anagrams', () => {
        let result = anagram.findAllAnagrams('q')
        let resultToBe = 'Sorry, no anagrams has been found.';
        expect(result).toEqual(resultToBe);
    })

    test('should correct findAllAnagrams(input) without string input', () => {
        let result = anagram.findAllAnagrams('');
        let resultToBe = 'Sorry, no anagrams has been found.';
        expect(result).toEqual(resultToBe);
    });

    test('should correct findAllAnagrams(input) case Sensitive', () => {
        let result  = anagram.findAllAnagrams('TEST');
        let resultToBe = ['test', 'test', 'test', 'etst', 'ttse'];
        expect(result).toEqual(resultToBe);
    });

});

