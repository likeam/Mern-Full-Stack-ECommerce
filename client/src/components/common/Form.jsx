import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CommonForm = ({ formControls }) => {
  const renderInputsByComponentType = (getConrolItem) => {
    let element = null;
    switch (getConrolItem.componentType) {
      case "input":
        element = (
          <Input
            name={getConrolItem.name}
            placeholder={getConrolItem.placeholder}
            id={getConrolItem.name}
            type={getConrolItem.type}
          />
        );

        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger className=" w-full">
              <SelectValue placeholder={getConrolItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getConrolItem.options && getConrolItem.options.length > 0
                ? getConrolItem.options.map((optionItem) => (
                    <SelectItem>{optionItem.label}</SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;
      case "textarea":
        element = (
          <Input
            name={getConrolItem.name}
            placeholder={getConrolItem.placeholder}
            id={getConrolItem.name}
            type={getConrolItem.type}
          />
        );

        break;

      default:
        element = (
          <Input
            name={getConrolItem.name}
            placeholder={getConrolItem.placeholder}
            id={getConrolItem.name}
            type={getConrolItem.type}
          />
        );
        break;
    };
    return element;
  };

  return (
    <form>
      <div className=" flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className=" grid w-full gap-1.5" key={formControls.name}>
            <Label className=" mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
    </form>
  );
};

export default CommonForm;
