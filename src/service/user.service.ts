import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createAt" | "upateAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {}
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password)
}
