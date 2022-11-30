import { useEffect, useState } from 'react'
import logo_white from './assets/logo_white.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    domain: '',
  });

  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    date: 0,
    domain: 0,
    sub: 0,
  })
  const [error, setError] = useState({
    error: null
  });

  useEffect(() => {
    fetch('https://columbus.elmasy.com/stat')
      .then(response => response.json())
      .then(stats => setStats(stats))
  }, [])

  const handleSubmit = (e: any) => {
    console.log('A name was submitted: ' + form.domain);
    fetch(`https://columbus.elmasy.com/lookup/${form.domain}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setError({error: null});
          setData(data.map((d: string) => `${d}${d? '.' : ''}${form.domain}`));
        } else {
          setError(data);
          setData([]);
          throw new Error(data.error);
        }
      });

    e.preventDefault();
  }

  const list = data.map((d: string, index: number) => <li key={index}>{d}</li>);
  const stat = <p>{`As of ${new Date(stats.date * 1000).toDateString()}, ${stats.domain} number of domain and ${stats.sub} number of subdomains are in the database.`}</p>

  return (
    <div className="App">
      <header className='header'>
        <img src={logo_white} alt="Elmasy logo" />
        <h1>Columbus Project</h1>
      </header>
      <section>
        <form className='search-form' onSubmit={handleSubmit}>
          <input type="text" placeholder="Domain name" value={form.domain} onChange={e => {
              setForm({
                ...form,
                domain: e.target.value
              });
            }}/>
          <input type='submit' value="Find"></input>
        </form>
        <div className='error'>
          {error.error}
        </div>
        <ul className='domain-list'>
            {list}
        </ul>
      </section>
      <footer className='footer'>
        {stat}
      </footer>
    </div>
  )
}

export default App
