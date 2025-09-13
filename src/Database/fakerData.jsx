// src/fakeData.js
import { faker } from "@faker-js/faker";

// Function to generate students data
export const generateData = (count = 10) => {
  return Array.from({ length: count }, (_, i) => ({
    key: i + 1,
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 25 }),
    email: faker.internet.email(),
    gender: faker.person.sexType(),
    city: faker.location.city(),
  }));
};

// Generate once and export as default dataset
export const dataSource = generateData(20);
