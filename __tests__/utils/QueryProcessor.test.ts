import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "arumaihi"
          ));
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Abdulwahab"
          ));
    });

    test('should return 32', () => {
        const query = "31 plus 1";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "32"
          ));
    });

    test('should return largest', () => {
        const query = "29, 54, 51";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "54"
          ));
    });
    test('should return the largest number: 98, 78, 31', () => {
        const query = "Which of the following numbers is the largest: 98, 78, 31?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("98");
    });
    
    test('should return the largest number: 6, 14, 99', () => {
        const query = "Which of the following numbers is the largest: 6, 14, 99?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("99");
    });
    
    test('should return the largest number: 65, 18, 68', () => {
        const query = "Which of the following numbers is the largest: 65, 18, 68?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("68");
    });
    
    test('should return the largest number: 62, 77, 90', () => {
        const query = "Which of the following numbers is the largest: 62, 77, 90?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("90");
    });
    
    test('should return the largest number: 62, 10, 2', () => {
        const query = "Which of the following numbers is the largest: 62, 10, 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("62");
    });
    
    test('should return the largest number: 84, 56, 46', () => {
        const query = "Which of the following numbers is the largest: 84, 56, 46?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("84");
    });
    
    test('should return the largest number: 29, 54, 51', () => {
        const query = "Which of the following numbers is the largest: 29, 54, 51?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("54");
    });
    test('should return sum of 29 and 81', () => {
        const query = "What is 29 plus 81?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("110");
    });
    
    test('should return sum of 76 and 81', () => {
        const query = "What is 76 plus 81?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("157");
    });
    
    test('should return sum of 48 and 25', () => {
        const query = "What is 48 plus 25?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("73");
    });
    
    test('should return sum of 82 and 83', () => {
        const query = "What is 82 plus 83?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("165");
    });
    

});
