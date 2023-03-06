import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  send_file: async (file, email) => {
    const formData = new FormData();
    formData.append("email", email);

    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    console.log(formData.get("files"));
    const res = await axios.post(
      "http://localhost:1337/api/v1/sendFile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res.data);
  },
}));
