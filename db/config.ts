import { defineDb, defineTable, column } from 'astro:db';

// TABLE DEFINITIONS

// CONTACT FORM
const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
    email: column.text(),
    message: column.text(),
    date: column.text(),
    time: column.text(),
  }
});

export default defineDb({
  tables: { Contact }
});