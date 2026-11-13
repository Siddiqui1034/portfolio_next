import { Schema, model, models } from "mongoose";

const contactSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,

      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

// contactSchema.pre("save", async function (next) {
//   let count = await model("Contact").countDocuments({ email: this.email });
//   if (count > 0) {
//     throw new Error("Email Already Exists");
//   }
// });

const ContactModel = models.Contact || model("Contact", contactSchema);

export default ContactModel;
