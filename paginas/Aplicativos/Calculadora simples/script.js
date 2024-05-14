function calcular(tipo, valor){
          
            if (tipo === 'acao') {
              
				  if( valor === 'c'){
					document.getElementById('resultado').value = ''
				  }
				  if( valor === '+'|| valor === '-' || valor === '*' || valor === '/' || valor === '.' || valor === '**') {
					document.getElementById('resultado').value += valor
				  }
				  if( valor === '=') {
					var valor_campo = eval(document.getElementById('resultado').value)

					document.getElementById('resultado').value = valor_campo
				  }
				  if(valor === 'raiz') {
					var valor_campo = Math.sqrt(document.getElementById('resultado').value)

					document.getElementById('resultado').value = valor_campo
				  }
				  if(valor === 'sen') {
					var valor_campo = Math.sin(document.getElementById('resultado').value);

					document.getElementById('resultado').value = valor_campo;
				  }
				  if(valor === 'cos') {
					var valor_campo = Math.cos(document.getElementById('resultado').value);

					document.getElementById('resultado').value = valor_campo;
				  }
				  if(valor === 'tan') {
					var valor_campo = Math.tan(document.getElementById('resultado').value);

					document.getElementById('resultado').value = valor_campo;
				  }
				  if(valor === 'log') {
					var valor_campo = Math.log(document.getElementById('resultado').value);

					document.getElementById('resultado').value = valor_campo;
				  }
				  

              
            } else if(tipo === 'valor') {
                            
              document.getElementById('resultado').value += valor
            }
          }