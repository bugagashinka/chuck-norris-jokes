import React from "react";
import JokeCard from "components/JokeCard";
import { connect } from "react-redux";

const JokesList = (props) => {
  const { jokes } = props;

  const jokeElementList = jokes.map((jokeData) => {
    return <JokeCard key={jokeData.id} styleClassPrefix="filtered" data={jokeData} />;
  });
  return <section className="filtered">{jokeElementList}</section>;
};

const mapStateToProps = (state) => {
  return { jokes: state.jokes.list };
};

export default connect(mapStateToProps, {})(JokesList);
