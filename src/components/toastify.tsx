import { toast } from "react-toastify";
type ToastifyType = "success" | "error" | "info"

const Notify = (text: string, type: ToastifyType) => toast(text, { type });

export default Notify