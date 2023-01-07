import { useState } from "react";
import ListaArt from '../public/data.json'


export default function Home() {
  return (
    <div
      style={{ width: '100vw', height: '100vh', background: '#DDDDDD', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '80px', gap: '20px' }}>
      <div
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <p style={{ fontSize: '35pt', fontWeight: 'bold', color: 'MenuText' }}>Conjura FRA</p>
        <p style={{ color: 'gray' }}>Digite qualquer verbo para obter as conjugações nos tempos verbais</p>
      </div>
      <div style={{ marginTop: '80px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Table />
      </div>
    </div>
  )
}
function Table() {
  const [busca, setBusca] = useState('');
  const lowerBusca = busca.toLowerCase()
  const ListaFiltrada = ListaArt.verbs.filter((Lista) => Lista.verb.toLowerCase().includes(lowerBusca))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <input
        style={{ borderRadius: '6px', fontSize: '13pt', fontWeight: '600', color: 'steelblue', paddingLeft: '20px', position: 'relative', width: '850px', height: '26px', padding: '10px' }}
        value={busca}
        placeholder="manger, écrire, penser,  etc... "
        onChange={(ev) => setBusca(ev.target.value)}
        type="text" />

      <div >
        {busca == '' ? (
          <div style={{ display: 'flex', gap: '8px', marginTop: '40px', fontSize: '14pt', color: 'gray' }}>
            {ListaFiltrada.map((e: any) => (
              <div key={e.verb} style={{ display: 'flex', background: "#ccc", color: 'steelblue', padding: '8px', borderRadius: '6px', cursor: 'pointer' }}>
                <p onClick={() => { setBusca(e.verb) }}>{e.verb}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '80px', marginTop: '80px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: '3px solid #BBB', padding: '20px', borderRadius: '16px', boxShadow: '2px 2px 5px 5px #ccc9' }}>
              {ListaFiltrada.map((e: any) => (
                <div key={e.verb} style={{ display: 'flex', gap: '50px', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                  {e.verb != busca ? (<></>) : (
                    e.tenses.map((e: any) => (
                      <div key={e.conjugations} style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '14pt', color: 'firebrick', marginBottom: '16px' }}><b>{e.tense}</b></p>
                        {e.conjugations.map((e: any) => (
                          <div key={e.term} style={{ display: 'flex', flexDirection: 'column', color: 'steelblue', minWidth: '350px', padding: '4px' }}>
                            <p style={{ background: '#ccc', padding: '6px' }}><b>{e.term}</b></p>
                            <p style={{ paddingTop: '10px', color: '#111', padding: '4px' }}>{e.definition}</p>
                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        )
        }
      </div >
    </div >
  )
}
