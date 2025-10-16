import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ControllerRenderProps } from "react-hook-form"

export default function ActionSelect(props: ControllerRenderProps) {
  return(
    <Select {...props} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Kebutuhan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Pertanyaan</SelectItem>
        <SelectItem value="2">Permintaan Penghapusan Akun</SelectItem>
      </SelectContent>
    </Select>
  )
}