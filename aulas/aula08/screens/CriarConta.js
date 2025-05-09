import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function CriarConta() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="nome"
        rules={{ required: "Nome é obrigatorio" }}
        render={({ field: { value, onchange, onBlur } }) => (
          <TextInput
            label="Nome"
            autoCapitalize="words"
            mode="outlined"
            value={value}
            onChangeText={onchange}
            onBlur={onBlur}
            error={errors.nome}
          />
        )}
      />
      <HelperText type="error" visible={errors.nome}>
        {errors.nome?.message}
      </HelperText>
      <Controller
        control={control}
        name="email"
        rules={{ required: "E-mail é obrigatorio" }}
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
        rules={{ required: "Senha é obrigatorio" }}
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
      <Controller
        control={control}
        name="confirmaSenha"
        rules={{ required: "Confirmar senha é obrigatorio" }}
        render={({ field: { value, onchange } }) => (
          <TextInput
            label="Confirmar senha"
            secureTextEntry
            mode="outlined"
            value={value}
            onChangeText={onchange}
            error={errors.confirmaSenha}
          />
        )}
      />
      <HelperText type="error" visible={errors.confirmaSenha}>
        {errors.confirmaSenha?.message}
      </HelperText>
      <Button
        style={{ marginBottom: 16 }}
        mode="contained"
        onPress={handleSubmit(() => alert("ok"))}>
        Criar
      </Button>
    </View>
  );
}

export default CriarConta;
