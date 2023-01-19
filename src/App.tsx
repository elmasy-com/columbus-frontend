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
    form.domain = form.domain.toLocaleLowerCase();
    fetch(`https://columbus.elmasy.com/tools/domain/${form.domain}`).then((response) => response.json())
    .then(data => {
      const { result } = data; 
      form.domain = result;
      fetch(`https://columbus.elmasy.com/lookup/${result}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setError(data);
          setData(data.map((d: string) => `${d}${d? '.' : ''}${result}`));
        } else {
          setError(data);
          setData([]);
          throw new Error(data.error);
        }
      });
    })

    e.preventDefault();
  }

  const list = data.map((d: string, index: number) => <span className='sub-domain' key={index}>{d}</span>);
  const stat = <p>{`As of ${new Date(stats.date * 1000).toDateString()}, ${stats.domain} number of domain and ${stats.sub} number of subdomains are in the database.`}</p>

  return (
    <div className="App">
      <header className='header'>
        <img src={logo_white} alt="Elmasy logo" />
        <h1>Columbus Project</h1>
      </header>
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
      <section>
        <div className='domain-list'>
            {list}
        </div>
      </section>
      <footer className='footer'>
        {stat}
      </footer>
    </div>
  )
}

export default App
