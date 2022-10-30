import React, {
  useEffect,
  Fragment,
  SyntheticEvent,
  BaseSyntheticEvent,
  useState,
} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchedBooks } from "../../hooks/useBooks";
import { useRouter } from "next/router";

interface Film {
  title: string;
  year: number;
  bookId: number;
}

interface ISearchField {
  fullWidth?: boolean;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchField({ fullWidth }: ISearchField) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const loading = open && options.length === 0;
  const [searchEnabled, setSearchEnabled] = useState(false);

  const { booksData, isLoading } = useSearchedBooks({
    isEnabled: searchEnabled,
  });

  useEffect(() => {
    let active = true;

    const newOptions: Film[] = booksData.map((item: any) => ({
      title: item.title,
      year: item.year,
      bookId: item.id,
    }));

    if (!loading) {
      return undefined;
    }

    // (async () => {
    // await sleep(1e3); // For demo purposes.

    if (active) {
      setOptions(newOptions);
    }
    // })();

    return () => {
      active = false;
    };
  }, [loading, searchEnabled, booksData]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (e: any, value: any) => {
    console.log(value);
    router.push(`/books/${value.bookId}/details`);
  };

  const handleInput = (e: BaseSyntheticEvent) => {
    console.log(e.target.value);
    setSearchEnabled(true);
  };

  return (
    <Autocomplete
      // fullWidth={fullWidth}
      id="asynchronous-demo"
      sx={{ width: fullWidth ? "100%" : "300px" }}
      open={open}
      onOpen={() => {
        setSearchEnabled(true);
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={handleChange}
      onInput={handleInput}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          // label="Asynchronous"
          placeholder="Search books..."
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}
