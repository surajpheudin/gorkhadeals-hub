import { GroupBase } from "react-select";
import ReactSelectCreatableSelect, {
    CreatableProps,
} from "react-select/creatable";

const CreatableSelect = ({ ...otherProps }: ICreatableSelect) => {
    return (
        <ReactSelectCreatableSelect
            isMulti
            options={[]}
            formatCreateLabel={(value) => `Add ${value}`}
            {...otherProps}
        />
    );
};

export default CreatableSelect;

interface ICreatableSelect
    extends CreatableProps<unknown, true, GroupBase<unknown>> {}
