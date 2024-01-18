"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = (e) => {
        const params = new URLSearchParams(searchParams);
        if(e.target.value === "") {
            params.delete("q");
        }
        params.set("q", e.target.value);
        replace(`${pathname}?${params}`);
    }


    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;