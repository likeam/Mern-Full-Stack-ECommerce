import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  const renderInputsByComponentType = (getConrolItem) => {
    let element = null;
    const value = formData[getConrolItem.name] || "";

    switch (getConrolItem.componentType) {
      case "input":
        element = (
          <Input
            name={getConrolItem.name}
            placeholder={getConrolItem.placeholder}
            id={getConrolItem.name}
            type={getConrolItem.type}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getConrolItem.name]: e.target.value,
              })
            }
          />
        );

        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getConrolItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className=" w-full">
              <SelectValue placeholder={getConrolItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getConrolItem.options && getConrolItem.options.length > 0
                ? getConrolItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id}  value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;
      case "textarea":
        element = (
          <Textarea
            name={getConrolItem.name}
            placeholder={getConrolItem.placeholder}
            id={getConrolItem.name}
            type={getConrolItem.type}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getConrolItem.name]: e.target.value,
              })
            }
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
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getConrolItem.name]: e.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className=" flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className=" grid w-full gap-1.5" key={controlItem.name}>
            <Label className=" mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className=" mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
