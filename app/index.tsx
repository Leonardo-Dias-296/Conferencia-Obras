import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { colors } from "@/theme/colors";

// Tela inicial (Tela 1 do spec).
// Nesta etapa (Etapa 1: projeto base), os dados são estáticos —
// serão conectados ao armazenamento local a partir da Etapa 3/4.

const dataFormatada = "Sexta-feira — 28/08";
const totalEquipes = 7;
const concluidas = 0;
const pendentes = totalEquipes - concluidas;

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>CONFERÊNCIA DE CARGAS</Text>
      <Text style={styles.data}>{dataFormatada}</Text>

      <View style={styles.resumoCard}>
        <View style={styles.resumoLinha}>
          <Text style={styles.resumoNumero}>{totalEquipes}</Text>
          <Text style={styles.resumoLabel}>equipes</Text>
        </View>
        <View style={styles.resumoLinha}>
          <Text style={[styles.resumoNumero, { color: colors.statusConcluido }]}>
            {concluidas}
          </Text>
          <Text style={styles.resumoLabel}>concluídas</Text>
        </View>
        <View style={styles.resumoLinha}>
          <Text style={[styles.resumoNumero, { color: colors.statusPendente }]}>
            {pendentes}
          </Text>
          <Text style={styles.resumoLabel}>pendentes</Text>
        </View>
      </View>

      <Pressable style={styles.botaoPrimario}>
        <Text style={styles.botaoPrimarioTexto}>VER PROGRAMAÇÃO</Text>
      </Pressable>

      <Pressable style={styles.botaoSecundario}>
        <Text style={styles.botaoSecundarioTexto}>NOVA PROGRAMAÇÃO</Text>
      </Pressable>

      <Pressable style={styles.botaoSecundario}>
        <Text style={styles.botaoSecundarioTexto}>HISTÓRICO</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginTop: 12,
  },
  data: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 12,
  },
  resumoCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    marginBottom: 16,
  },
  resumoLinha: {
    alignItems: "center",
    gap: 4,
  },
  resumoNumero: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  resumoLabel: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  botaoPrimario: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
  },
  botaoPrimarioTexto: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  botaoSecundario: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  botaoSecundarioTexto: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
