import { NextRequest, NextResponse } from "next/server";
import ContactModel from "../models/contact.model";
interface ContactInterface {
  fullname: string;
  email: string;
  phone: string;
  designation: string;
  company: string;
  message: string;
}
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body: ContactInterface = await req.json();
    const { fullname, email, phone, designation, company, message } = body;
    const newContact = await ContactModel.create({
      fullname,
      email,
      phone,
      designation,
      company,
      message,
    });
    return NextResponse.json(
      { success: true, data: newContact },
      { status: 201 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
