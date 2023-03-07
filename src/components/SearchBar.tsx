import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/styles/SearchBar.module.css';

export default function SearchBar() {
    const [contents, setContents] = useState<string>('');

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setContents(evt.target.value);
    // const clearContents = () => setContents('');

    // TODO: add submit handler when we know what search behavior should be

    return (
        <div className={styles.SearchBar}>
            <SearchIcon />
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search..."
                value={contents}
                onChange={handleChange}
            />
        </div>
    );
}
