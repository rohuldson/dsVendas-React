import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutsChart from "components/DonutsChart";
import Footer from "components/Footer/Index";
import NavBar from "components/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-primary py-3">User Dashboard</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-secondary text-center">
              Taxa de sucesso dos vendedores (%){" "}
            </h5>

            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-secondary text-center">
              Taxa de sucesso dos vendedores (%){" "}
            </h5>

            <DonutsChart />
          </div>
        </div>

        <div className="py3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>
        <DataTable />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;