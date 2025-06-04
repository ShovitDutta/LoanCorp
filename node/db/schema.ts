import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const borrowers = sqliteTable('borrowers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  residenceType: text('residence_type').notNull(),
  monthlyIncome: integer('monthly_income').notNull(),
  previousLoan: text('previous_loan').notNull(),
  maritalStatus: text('marital_status').notNull(),
  numberOfDependencies: integer('number_of_dependencies').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
});
