import React from 'react'
import './Searchbar.scss'

type Search = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string;
}

export const Searchbar: React.FC<Search> = ({ onChange, value }) => {

  return (
    <section className="wrap__inner">
      <article className="search">
        <input
          onChange={onChange}
          type="text"
          className="searchTerm"
          placeholder="Search..."
          value={value} />
      </article>
    </section>
  )
}
