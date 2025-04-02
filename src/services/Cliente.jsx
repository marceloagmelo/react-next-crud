import { Api } from "./Api";

export const ServiceCreate = async (url, data) => {
  var mensagem;

  const headers = {
    'header': {
      'content-type': 'application/json'
    }
  };

  await Api.post(
    url, 
    data,
    headers
  ).then((response) => {
    mensagem = response.data.message;
  }).catch((err) => {
    if (err.response){
      mensagem = err.response.data.message;
    } else {
      mensagem = "Erro tente novamente mais tarde!";
    };
  });

  return mensagem;
}

export const ServiceUpdate = async (url, data) => {
  var mensagem;

  const headers = {
    'header': {
      'content-type': 'application/json'
    }
  };

  await Api.put(
    url, 
    data,
    headers
  ).then((response) => {
    mensagem = "Cliente atualizado com sucesso!";
  }).catch((err) => {
    if (err.response){
      mensagem = err.response.data.message;
    } else {
      mensagem = "Erro tente novamente mais tarde!";
    }
  });

  return mensagem;
}

export const ServiceDelete = async (url) => {
    var mensagem;

    await Api.delete(
        url
      ).then((response) => {
        mensagem = "Cliente excluído com sucesso!";
      }).catch((err) => {
        if (err.response){
          mensagem = err.response.data.message;
        } else {
          mensagem = "Erro tente novamente mais tarde!";
        }
      });

    return mensagem;
}
