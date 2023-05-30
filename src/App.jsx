import './App.css';
// import React from 'react';
import React, {useState} from 'react';




const App = () => {
  const [penilaian, setPenilaian] = useState({});

  const handleChangeNilai = (e, aspek, mahasiswa) => {
    const { value } = e.target;
    setPenilaian((penilaianSebelumnya) => ({
      ...penilaianSebelumnya,
      [aspek]: {
        ...penilaianSebelumnya[aspek],
        [mahasiswa]: parseInt(value)
      }
    }));
  };

  const handleSimpan = () => {
    const jsonData = JSON.stringify(penilaian, null, 2);
    console.log(jsonData); // Anda dapat mengubah ini untuk mengirim data JSON ke server atau melakukan tindakan lain yang diinginkan.
  };

  return (
    <div>
      <>
        <h1 className='fw-bold mt-3'> Aplikasi Penilaian Mahasiswa </h1> 
        <hr className='w-75 mx-auto mb-1' />

        <div className='container py-5' >
          <div className ='row' >
              <div className = 'col-12 text-center' >
            </div> 
          </div >
    

          <div className='row  mb-1' id='labelap'>
                <div className='label fw-bold'>
                    <a className=' px-2 me-2' id='ap1'>  Aspek Penialaian 1</a>
                    <a className=' px-2 me-2'  id='ap2'>  Aspek Penialaian 2</a>
                    <a className=' px-2 me-2' id='ap3'>  Aspek Penialaian 3</a>
                    <a className=' px-2' id='ap4'>  Aspek Penialaian 4</a>
                </div>
          </div>
          
                      

                                      
            <div className='justify-content-center'>
              <div className='container ' id='co1'>
              <a>
                <form className='card-wrapper p-3' action="1">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 1</label>
                    <select className='apm1 px-5 py-2 me-2'
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_1'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_1')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_1'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_1')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_1'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_1')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_1'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_1')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                                
                </form>

                <form className='card-wrapper p-3' action="2">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 2</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_2'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_2')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_2'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_2')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_2'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_2')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_2'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_2')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="3">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 3</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_3'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_3')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_3'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_3')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_3'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_3')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_3'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_3')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="4">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 4</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_4'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_4')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_4'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_4')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_4'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_4')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_4'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_4')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="5">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 5</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_5'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_5')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_5'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_5')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_5'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_5')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_5'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_5')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="6">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 6</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_6'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_6')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_6'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_6')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_6'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_6')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_6'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_6')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="7">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 7</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_7'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_7')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_7'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_7')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_7'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_7')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_7'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_7')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="8">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 8</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_8'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_8')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_8'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_8')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_8'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_8')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_8'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_8')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="9">
                <i class="bi bi-person-circle"></i>
                    <label className='mhs me-2' >Mahasiswa 9</label>
                    <select className='apm1 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_1']?.['mahasiswa_9'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_9')}
                    name="aspek_penilaian_1" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select className='apm2 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_2']?.['mahasiswa_9'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_9')}
                    name="aspek_penilaian_2" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm3 px-5 py-2 me-2' 
                    value={penilaian['aspek_penilaian_3']?.['mahasiswa_9'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_9')}
                    name="aspek_penilaian_3" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <select className='apm4 px-5  py-2' 
                    value={penilaian['aspek_penilaian_4']?.['mahasiswa_9'] || ''}
                    onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_9')}
                    name="aspek_penilaian_4" id="mhs">
                        <option value="Input">-Input Here-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                </form>

                <form className='card-wrapper p-3' action="10">
                <i class="bi bi-person-circle"></i>
                        <label className='mhs me-1' >Mahasiswa 10</label>
                        <select className='apm1 px-5 py-2 me-2' 
                        value={penilaian['aspek_penilaian_1']?.['mahasiswa_10'] || ''}
                        onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_1', 'mahasiswa_10')}
                        name="aspek_penilaian_1" id="mhs">
                            <option value="Input">-Input Here-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <select className='apm2 px-5 py-2 me-2' 
                        value={penilaian['aspek_penilaian_2']?.['mahasiswa_10'] || ''}
                        onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_2', 'mahasiswa_10')}
                        name="aspek_penilaian_2" id="mhs">
                            <option value="Input">-Input Here-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        <select className='apm3 px-5 py-2 me-2' 
                        value={penilaian['aspek_penilaian_3']?.['mahasiswa_10'] || ''}
                        onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_3', 'mahasiswa_10')}
                        name="aspek_penilaian_3" id="mhs">
                            <option value="Input">-Input Here-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        <select className='apm4 px-5  py-2' 
                        value={penilaian['aspek_penilaian_4']?.['mahasiswa_10'] || ''}
                        onChange={(e) => handleChangeNilai(e, 'aspek_penilaian_4', 'mahasiswa_10')}
                        name="aspek_penilaian_4" id="mhs">
                            <option value="Input">-Input Here-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                </form>
              </a>
            </div>
          </div>
          <button className='button py-2 px-5 mt-2' onClick={handleSimpan}>Save</button>
                    
        </div>
                        
      </>
    </div>

  );
};

export default App;




// class App extends React.Component {

//     render() {
//         return ( 
//             <div>
//             <>
//                 <div className='container py-5' >
//                     <div className ='row' >
//                         <div className = 'col-12 text-center' >
//                             <h1 className='fw-bold'> Aplikasi Penilaian Mahasiswa </h1> 
//                             {mahasiswa,map((mhs, index) => (
//                                 <div key={index}>

//                                 </div>
//                             ))}
//                             <hr className='w-75 mx-auto' />
//                         </div> 
//                     </div >

//                     <div className='row-1 mt-3 py-5px'>
//                         <div className='label mb-3 fw-bold'>
//                             <a id='ap1'>  Aspek Penialan 1</a>
//                             <a id='ap2'>  Aspek Penialan 2</a>
//                             <a id='ap3'>  Aspek Penialan 3</a>
//                             <a id='ap4'>  Aspek Penialan 4</a>
//                         </div>

//                         <div className='justify-content-center'>
//                         <div className='container' id='co1'>
//                             <a>
                                
//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 1</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>

//                                 </select>
//                                 {/* <input type="submit" value="Kirim" /> */}
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                            
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 2</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 3</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                 <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 4</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 5</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                 <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 6</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 7</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 8</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                 <label className='mhs me-2' >Mahasiswa 9</label>
//                                 <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                                 <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>

//                                 <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
                                
//                             </form>

//                             <form className='card-wrapper p-3' action="#">
//                                     <label className='mhs me-2' >Mahasiswa 10</label>
//                                     <select className='apm1 px-5 py-2 me-2 ' name="aspek penilaian1" id="mhs">
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                         <option value="4">4</option>
//                                         <option value="5">5</option>
//                                         <option value="6">6</option>
//                                         <option value="7">7</option>
//                                         <option value="8">8</option>
//                                         <option value="9">9</option>
//                                         <option value="10">10</option>
//                                     </select>
//                                     <select className='apm2 px-5 py-2 me-2' name="aspek penilaian2" id="mhs">
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                         <option value="4">4</option>
//                                         <option value="5">5</option>
//                                         <option value="6">6</option>
//                                         <option value="7">7</option>
//                                         <option value="8">8</option>
//                                         <option value="9">9</option>
//                                         <option value="10">10</option>
//                                     </select>

//                                     <select className='apm3 px-5 py-2 me-2' name="aspek penilaian3" id="mhs">
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                         <option value="4">4</option>
//                                         <option value="5">5</option>
//                                         <option value="6">6</option>
//                                         <option value="7">7</option>
//                                         <option value="8">8</option>
//                                         <option value="9">9</option>
//                                         <option value="10">10</option>
//                                     </select>

//                                     <select className='apm4 px-5  py-2 ' name="aspek penilaian4" id="mhs">
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                         <option value="4">4</option>
//                                         <option value="5">5</option>
//                                         <option value="6">6</option>
//                                         <option value="7">7</option>
//                                         <option value="8">8</option>
//                                         <option value="9">9</option>
//                                         <option value="10">10</option>
//                                     </select>
//                             </form>
//                                 <button onClick={handleSave}>Save</button>

//                             </a>

//                         </div>
//                         </div>

                                

//                     </div>
                    
//                 </div> 
//             </>
//             </div>
//         )

//     }   
// }

// export default PenilaianMahasiswa;