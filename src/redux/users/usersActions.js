import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsList } from "../../api/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchByIdStatus",
  getContactsList
);
