import { carouselItems } from "./carousel-items";

const user = {
    id: 1,
    username: "Ronrix Lante",
    description: "This is a sample description",
    sports: ["Basketball", "Chess"],
    hobbies: ["Playing Games"],
    location: "St. USA",
    birthday: "Oct 17, 2022",
    posts: [...carouselItems]
};

const users = [
    {
        id: 1,
        username: "John Smith",
        description: "This is a sample description 1",
        sports: ["Basketball", "Chess"],
        hobbies: ["Playing Games"],
        location: "St. USA",
        birthday: "Oct 17, 2022",
        posts: [
            {
                id: 1,
                img: "model-1.jpg",
                description: "Test 1"
            },
            {
                id: 2,
                img: "model-1.jpg",
                description: "Test 1"
            },
            {
                id: 3,
                img: "model-1.jpg",
                description: "Test 1"
            }
        ]
    },
    {
        id: 2,
        username: "Joe Wa",
        description: "This is a sample description 2",
        sports: ["Badminton", "Volleyball", "Other"],
        hobbies: ["Playing Games"],
        location: "St. USA",
        birthday: "Oct 18, 2022",
        posts: [
            {
                id: 1,
                img: "model-2.webp",
                description: "Test 1"
            },
            {
                id: 2,
                img: "model-2.webp",
                description: "Test 1"
            },
            {
                id: 3,
                img: "model-2.webp",
                description: "Test 1"
            }
        ]
    },
    {
        id: 3,
        username: "Ed Caluag",
        description: "This is a sample description 3",
        sports: ["Basketball", "Chess"],
        hobbies: ["Playing Games"],
        location: "St. USA",
        birthday: "Oct 18, 2022",
        posts: [
            {
                id: 1,
                img: "model-3.jpg",
                description: "Test 1"
            },
            {
                id: 2,
                img: "model-3.jpg",
                description: "Test 1"
            },
            {
                id: 3,
                img: "model-3.jpg",
                description: "Test 1"
            }
        ]
    },
    {
        id: 4,
        username: "Ronrix Lante",
        description: "This is a sample description 4",
        sports: ["Basketball", "Chess"],
        hobbies: ["Playing Games"],
        location: "St. USA Philippines",
        birthday: "Oct 19, 2022",
        posts: [
            {
                id: 1,
                img: "model-4.png",
                description: "Test 1"
            },
            {
                id: 2,
                img: "model-4.png",
                description: "Test 1"
            },
            {
                id: 3,
                img: "model-4.png",
                description: "Test 1"
            }
        ]
    }
];

export { user, users };
