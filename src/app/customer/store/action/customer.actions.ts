import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const addCustomers = createAction(
  '[Customer] Add Customers',
  (customer:Customer) => ({customer})
);

export const deleteCustomers = createAction(
  '[Customer] Delete Customers',
  props<{ customerName: string }>()
);