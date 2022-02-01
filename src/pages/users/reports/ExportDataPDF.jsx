import React, { useContext } from "react";
import Modal from "../../../components/modal/modal";
import UserContext from "../../../context/UserContext";
import { jsPDF } from "jspdf";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import ButtonBorder from "../../../components/buttoms/buttonBorder";

const ExportDataPDF = ({ setPreViewPDF, data }) => {
  const styles = StyleSheet.create({
    table: {
      display: "table",
      borderStyle: "solid",
      borderWidth: 0.5,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      textAlign: "left",
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableHead: {
      margin: "auto",
      flexDirection: "row",
      backgroundColor: "#474B4E",
      color: "white",
    },
    tableCol: {
      width: "10%",
      borderStyle: "solid",
      paddingHorizontal: "2px",
      borderWidth: 0.5,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: { marginTop: 5, fontSize: 7 },
    tableCellHead: { marginTop: 5, fontSize: 8 },
  });

  const MyDocument = (
    <Document>
      <Page size="A4">
        <View style={{ padding: 20 }}>
          <View style={styles.table}>
            {/* TableHeader */}
            <View style={styles.tableHead}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Product</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Type</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Period</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHead}>Price</Text>
              </View>
            </View>
            {/* TableContent */}
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Gustavo Adolfo Martibez</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>3 User </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>2019-02-20</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>dlk jabSLDKJBALSKD</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5€</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <Modal>
      <PDFViewer style={{ width: "100%", height: "70vh" }}>
        {MyDocument}
      </PDFViewer>
      <ButtonBorder text="Cerrar" onclick={() => setPreViewPDF(false)} />
    </Modal>
  );
};

export default ExportDataPDF;
