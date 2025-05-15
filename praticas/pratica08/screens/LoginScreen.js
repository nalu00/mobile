import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

function LoginScreen() {
const schema = Yup.object().shape({
  email: Yup.string().required("E-mail é obrigatorio").email("E-meial é invalido"),
  senha: Yup.string().required("Senha é obrigatorio").min(8, "Deve ter 8 caracteres"),
});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema)});

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onchange } }) => (
          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            value={value}
            onChangeText={onchange}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email?.message}
      </HelperText>
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onchange } }) => (
          <TextInput
            label="Senha"
            secureTextEntry
            mode="outlined"
            value={value}
            onChangeText={onchange}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha?.message}
      </HelperText>
      <Button
        style={{ marginBottom: 16 }}
        mode="contained"
        onPress={handleSubmit((data) => alert("ok"))}>
        Entrar
      </Button>
      <Button
        style={{ marginBottom: 16 }}
        mode="outlined"
        onPress={() => navigation.navigate("Recuperar Senha")}>
        Recuperar Senha
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Criar Conta")}>
        Criar Conta
      </Button>
    </View>
  );
}

export default LoginScreen;