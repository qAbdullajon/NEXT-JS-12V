import { toast } from "react-toastify";

const Notify = (text: string) => toast(text, { type: "success" });

export default Notify