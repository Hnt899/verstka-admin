import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Functions from './pages/Functions/Functions'
import Requisites from './pages/Requisites/Requisites'
import Service from './pages/Service/Service'
import CreateService from './pages/Service/CreateService'
import Settings from './pages/Settings/Settings'
import CreateAccount from './pages/Settings/CreateAccount'
import CreateRole from './pages/Settings/CreateRole'
import CreatePermission from './pages/Settings/CreatePermission'
import CreateRule from './pages/Settings/CreateRule'
import Documents from './pages/Documents/Documents'
import Materials from './pages/Materials/Materials'
import CreateMaterial from './pages/Materials/CreateMaterial'
import Frames from './pages/Frames/Frames'
import CreateFrame from './pages/Frames/CreateFrame'
import Glass from './pages/Glass/Glass'
import CreateGlass from './pages/Glass/CreateGlass'
import LayoutPage from './pages/Layout/Layout'
import CreateLayout from './pages/Layout/CreateLayout'
import Pyramids from './pages/Pyramids/Pyramids'
import CreatePyramid from './pages/Pyramids/CreatePyramid'
import Certificates from './pages/Certificates/Certificates'
import CreateCertificate from './pages/Certificates/CreateCertificate'
import Groups from './pages/Groups/Groups'
import CreateGroup from './pages/Groups/CreateGroup'
import Services from './pages/Services/Services'
import CreateServiceOther from './pages/Services/CreateService'
import Reports from './pages/Reports/Reports'
import Orders from './pages/Orders/Orders'
import EditOrder from './pages/Orders/EditOrder'
import LayoutSelect from './pages/LayoutSelect/LayoutSelect'
import GlassCalculation from './pages/GlassCalculation/GlassCalculation'
import UPD from './pages/UPD/UPD'
import ViewUPD from './pages/UPD/ViewUPD'
import Templates from './pages/UPD/Templates'
import Cuts from './pages/Cuts/Cuts'
import EditCut from './pages/Cuts/EditCut'
import Clients from './pages/Clients/Clients'
import CreateClient from './pages/Clients/CreateClient'
import EditClient from './pages/Clients/EditClient'
import PriceList from './pages/PriceList/PriceList'
import CreatePriceList from './pages/PriceList/CreatePriceList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout breadcrumbs={['Главная']}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/functions"
          element={
            <Layout breadcrumbs={['Главная', 'Функции']}>
              <Functions />
            </Layout>
          }
        />
        <Route
          path="/requisites"
          element={
            <Layout breadcrumbs={['Главная', 'Установки', 'Реквизиты']} title="Редактирование реквизитов:">
              <Requisites />
            </Layout>
          }
        />
        <Route
          path="/service"
          element={
            <Layout breadcrumbs={['Главная', 'Сервис']}>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/service/create"
          element={
            <Layout breadcrumbs={['Главная', 'Сервис', 'Добавить сервис']} title="Добавить сервис">
              <CreateService />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout breadcrumbs={['Главная', 'Настройки']} title="Настройки">
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/settings/create-account"
          element={
            <Layout breadcrumbs={['Главная', 'Настройки']}>
              <CreateAccount />
            </Layout>
          }
        />
        <Route
          path="/settings/create-role"
          element={
            <Layout breadcrumbs={['Главная', 'Настройки']}>
              <CreateRole />
            </Layout>
          }
        />
        <Route
          path="/settings/create-permission"
          element={
            <Layout breadcrumbs={['Главная', 'Настройки']}>
              <CreatePermission />
            </Layout>
          }
        />
        <Route
          path="/settings/create-rule"
          element={
            <Layout breadcrumbs={['Главная', 'Настройки']}>
              <CreateRule />
            </Layout>
          }
        />
        <Route
          path="/documents"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Документы']}>
              <Documents />
            </Layout>
          }
        />
        <Route
          path="/materials"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Прочие материалы']}>
              <Materials />
            </Layout>
          }
        />
        <Route
          path="/materials/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Прочие материалы', 'Добавить прочий материал']}>
              <CreateMaterial />
            </Layout>
          }
        />
        <Route
          path="/frames"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Рамки']}>
              <Frames />
            </Layout>
          }
        />
        <Route
          path="/frames/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Рамки', 'Добавить рамку']}>
              <CreateFrame />
            </Layout>
          }
        />
        <Route
          path="/glass"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Стекла']}>
              <Glass />
            </Layout>
          }
        />
        <Route
          path="/glass/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Стекла', 'Добавить стекло']}>
              <CreateGlass />
            </Layout>
          }
        />
        <Route
          path="/layout"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Расклад']}>
              <LayoutPage />
            </Layout>
          }
        />
        <Route
          path="/layout/create"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Расклад', 'Добавить запись']}>
              <CreateLayout />
            </Layout>
          }
        />
        <Route
          path="/pyramids"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Пирамиды']}>
              <Pyramids />
            </Layout>
          }
        />
        <Route
          path="/pyramids/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Пирамиды', 'Добавить пирамиду']}>
              <CreatePyramid />
            </Layout>
          }
        />
        <Route
          path="/certificates"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Сертификаты']}>
              <Certificates />
            </Layout>
          }
        />
        <Route
          path="/certificates/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Сертификаты', 'Добавить сертификат']}>
              <CreateCertificate />
            </Layout>
          }
        />
        <Route
          path="/groups"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Территориальные группы']}>
              <Groups />
            </Layout>
          }
        />
        <Route
          path="/groups/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Территориальные группы', 'Добавить территориальную группу']}>
              <CreateGroup />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Услуги']}>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/services/create"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Услуги', 'Добавить услугу']}>
              <CreateServiceOther />
            </Layout>
          }
        />
        <Route
          path="/reports"
          element={
            <Layout breadcrumbs={['Главная', 'Отчёты']} title="Отчёты">
              <Reports />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Заказы']}>
              <Orders />
            </Layout>
          }
        />
        <Route
          path="/orders/edit/:id"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Заказы', 'Редактирование']}>
              <EditOrder />
            </Layout>
          }
        />
        <Route
          path="/orders/create"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Заказы', 'Редактирование']}>
              <EditOrder />
            </Layout>
          }
        />
        <Route
          path="/layout/select"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Заказы', 'Редактирование', 'Расклад']} title="Расклад">
              <LayoutSelect />
            </Layout>
          }
        />
        <Route
          path="/layout/calculation"
          element={
            <Layout breadcrumbs={['Главная', 'Прочее', 'Расклад']} title="Расчет стеклопакета">
              <GlassCalculation />
            </Layout>
          }
        />
        <Route
          path="/upd"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'УПД']}>
              <UPD />
            </Layout>
          }
        />
        <Route
          path="/upd/:id"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'УПД', '153']}>
              <ViewUPD />
            </Layout>
          }
        />
        <Route
          path="/upd/templates"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'УПД', 'Настройка шаблонов УПД']} title="Настройка шаблонов УПД">
              <Templates />
            </Layout>
          }
        />
        <Route
          path="/cuts"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Раскрои']}>
              <Cuts />
            </Layout>
          }
        />
        <Route
          path="/cuts/create"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Раскрои', 'Редактирование']} title="Редактирование раскроя">
              <EditCut />
            </Layout>
          }
        />
        <Route
          path="/cuts/edit/:id"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Раскрои', 'Редактирование']} title="Редактирование раскроя">
              <EditCut />
            </Layout>
          }
        />
        <Route
          path="/clients"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Клиенты']}>
              <Clients />
            </Layout>
          }
        />
        <Route
          path="/clients/create"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Клиенты', 'Добавление нового клиента']}>
              <CreateClient />
            </Layout>
          }
        />
        <Route
          path="/clients/edit/:id"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Клиенты', 'Редактирование']}>
              <EditClient />
            </Layout>
          }
        />
        <Route
          path="/price"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Прайс-лист']}>
              <PriceList />
            </Layout>
          }
        />
        <Route
          path="/price/create"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Прайс-лист', 'Создание прайс-листа']}>
              <CreatePriceList />
            </Layout>
          }
        />
        <Route
          path="/price/edit/:id"
          element={
            <Layout breadcrumbs={['Главная', 'Справочники', 'Прайс-лист', 'Создание прайс-листа']}>
              <CreatePriceList />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

