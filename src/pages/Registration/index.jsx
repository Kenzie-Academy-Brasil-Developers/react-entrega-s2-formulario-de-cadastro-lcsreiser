import "./styles.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Registration() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Seu nome deve conter apenas letras"
      ),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha precisa ter no mínimo 8 letras")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Sua senha deve conter uma letra maíscula, uma minúscula, um número e um caracter especial"
      ),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState("");

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    setUser(data);

    history.push(`/sucess/${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={errors.name && "red"}
        placeholder="Nome"
        {...register("name")}
        autoComplete="off"
      />
      <p>{errors.name?.message}</p>
      <input
        className={errors.email && "red"}
        placeholder="E-mail"
        {...register("email")}
        autoComplete="off"
      />
      <p>{errors.email?.message}</p>
      <input
        className={errors.password && "red"}
        placeholder="Senha"
        {...register("password")}
        autoComplete="off"
      />
      <p>{errors.password?.message}</p>
      <input
        className={errors.password_confirm && "red"}
        placeholder="Confirme sua senha"
        {...register("password_confirm")}
        autoComplete="off"
      />
      <p>{errors.password_confirm?.message}</p>
      <button type="submit" onClick={() => onSubmit}>
        Entrar
      </button>
    </form>
  );
}

export default Registration;
