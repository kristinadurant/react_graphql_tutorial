import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';
import { SectionWrapper, MovieDetails, Search, EmptyContent } from '../../components';

const SearchMovie = ({ client }) => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [inputValue, setInputValue] = useState(String());

  const handleChange = ({ value }) => setFeaturedMovie(value && value.data);

  const handleInputChange = input => {
    setInputValue(input);
    return input;
  };

  const loadOptions = async title => {
    try {
      const { data = {} } = await client.query({
        query: FetchMovies,
        variables: { where: { title } }
      });
      return (data.movies || []).map((movie = {}) => ({ label: movie.title, value: movie._id, data: movie }));
    } catch (e) {
      console.log('error fetching movies', e);
    }
  };
  
  return (
    <SectionWrapper>
      <Search
        onChange={handleChange}
        onInputChange={handleInputChange}
        loadOptions={loadOptions}
        inputValue={inputValue}
        placeholder="Search for a movie you want to watch..."
        async
      />
      {featuredMovie ? (
        <MovieDetails {...featuredMovie} />
      ) : (
        <EmptyContent text="Search for your favorite movie!" subText="If it doesn't exist, you can add it!" />
      )}
    </SectionWrapper>
  );
};

export default withApollo(SearchMovie);
