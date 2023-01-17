import "./Stats.css";
import stats from "../../Data/Stats";

export default function Stats(props) {
  return (
    <>
      <div className='stats-container'>
        {stats.map((stat, index) => {
          return (
            <div key={index}>
              <h2 className='stat-title heading-secondary'>{stat.number}</h2>
              <p className='stat-text'>{stat.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
