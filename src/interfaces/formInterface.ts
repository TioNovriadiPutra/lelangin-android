import { DateType } from "react-native-ui-datepicker";
import { AppHeaderButton } from "./pageInterface";

export interface FormType<T> {
  inputs: InputType[];
  defaultValue: T;
}

export interface AppFormType<T> extends FormType<T> {
  title: string;
  buttonData: ButtonType | AppHeaderButton;
  onSubmit?: (data?: any) => void;
}

export interface AuthFormType<T> extends AppFormType<T> {
  withFooter: boolean;
}

export interface InputType {
  type:
    | "text"
    | "password"
    | "dropdown"
    | "date"
    | "profile"
    | "thumbnail"
    | "textarea"
    | "currency"
    | "switch"
    | "time"
    | "galleries";
  name: string;
  placeholder: string;
  items?: DropdownType[];
}

export interface DropdownType {
  label: string;
  value: string | number;
}

export interface DropdownModalType {
  show: boolean;
  data: DropdownModalDataType | null;
}

export interface DropdownModalDataType {
  current: DropdownType | null;
  items: DropdownType[];
  onPick: (item: DropdownType) => void;
}

export interface DateModalType {
  show: boolean;
  data: DateModalDataType;
}

export interface DateModalDataType {
  type: "date" | "time";
  onPick: (date: DateType) => void;
}

export interface ButtonType {
  label: string;
  color: string;
}
