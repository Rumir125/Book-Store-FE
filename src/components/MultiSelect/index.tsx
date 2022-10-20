import * as React from "react";
import { Theme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useStyles from "./styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect({
  values,
  formProps = {},
  setValue,
  defaultValue = [],
  name,
  label,
}: any) {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState<string[]>(defaultValue);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setValue(name, typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
    setPersonName(defaultValue);
    setValue(name, defaultValue);
  }, [defaultValue, name, setValue]);

  return (
    <div className={classes.container}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <FormControl sx={{ width: "100%" }} {...formProps}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          defaultValue={defaultValue}
        >
          {values.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
