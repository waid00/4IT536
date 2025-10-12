import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Database, Server, Megaphone, UserCog, AlertCircle, ChevronDown, ChevronUp, ChevronsUpDown, FileCode } from 'lucide-react';
// ZMĚNA: Importujeme lokální obrázek diagramu
import dwhDiagram from './assets/DWH.png';

const MagicalMoneyDashboard = () => {
  const [expandedDepts, setExpandedDepts] = useState([]);
  const [currentPage, setCurrentPage] = useState('org'); // 'org', 'dwh', nebo 'inmon'

  const departments = [
    {
      name: 'Schvalování',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-blue-100 border-blue-300',
      textColor: 'text-blue-800',
      applications: ['Zákaznický portál', 'CRM', 'Emailové a komunikační systémy'],
      dataObjects: ['Osoba (žadatel)', 'Úvěrová žádost', 'Smlouva', 'Schvalovací výsledek'],
      capabilities: ['Vyhodnocení žádostí', 'Schvalování']
    },
    {
      name: 'Sales',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-green-100 border-green-300',
      textColor: 'text-green-800',
      applications: ['CRM', 'Zákaznický portál'],
      dataObjects: ['Osoba (prospekt / zákazník)', 'Kontakt', 'Obchodní případy'],
      capabilities: ['Osobní kontakt se zákazníky', 'Akvizice nových klientů']
    },
    {
      name: 'Marketing',
      icon: <Megaphone className="w-5 h-5" />,
      color: 'bg-yellow-100 border-yellow-300',
      textColor: 'text-yellow-800',
      applications: ['CRM', 'Web platforma', 'Sociální sítě', 'PPC nástroje'],
      dataObjects: ['Osoba (prospekt / zákazník)', 'Kampaň', 'Webový obsah'],
      capabilities: ['Propagace značky', 'Tvorba a vyhodnocování kampaní', 'Správa affiliate a digitálních kanálů']
    },
    {
      name: 'Customer Care + Vymáhání',
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'bg-orange-100 border-orange-300',
      textColor: 'text-orange-800',
      applications: ['Core systém', 'Kontaktní zákaznické centrum', 'CRM'],
      dataObjects: ['Osoba (dlužník)', 'Pohledávka', 'DPD', 'Stav vymáhání'],
      capabilities: ['Efektivní komunikace s dlužníky', 'Řízení inkasa', 'Spolupráce s externími agenturami']
    },
    {
      name: 'HR',
      icon: <UserCog className="w-5 h-5" />,
      color: 'bg-purple-100 border-purple-300',
      textColor: 'text-purple-800',
      applications: ['HR management systém'],
      dataObjects: ['Osoba (zaměstnanec)', 'Mzda', 'Přístupová role'],
      capabilities: ['Péče o zaměstnance', 'Zpracování mezd', 'Školení a rozvoj']
    },
    {
      name: 'Payments',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'bg-emerald-100 border-emerald-300',
      textColor: 'text-emerald-800',
      applications: ['Zákaznický portál', 'Správa plateb', 'ERP'],
      dataObjects: ['Transakce', 'Osoba (klient účet)', 'Stav splátky', 'Záznam o prodlení (DPD)'],
      capabilities: ['Správa plateb', 'Kontrola cashflow', 'Dohledání a párování transakcí']
    },
    {
      name: 'Credit Risk',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-red-100 border-red-300',
      textColor: 'text-red-800',
      applications: ['Credit scoring systém'],
      dataObjects: ['Osoba (klient / žadatel)', 'Pravidlo', 'Scoringový model', 'Rozhodnutí', 'Skóre'],
      capabilities: ['Tvorba a správa scoring modelů', 'Hodnocení úvěrových rizik']
    },
    {
      name: 'BI oddělení',
      icon: <Database className="w-5 h-5" />,
      color: 'bg-indigo-100 border-indigo-300',
      textColor: 'text-indigo-800',
      applications: ['Reportovací nástroje', 'Datový sklad (DWH)', 'Self Service BI'],
      dataObjects: ['Fakta', 'Dimenze', 'Agregované metriky', 'Reporty'],
      capabilities: ['Analýzy', 'Dashboardy', 'Reportování', 'Podpora rozhodování']
    },
    {
      name: 'IT oddělení',
      icon: <Server className="w-5 h-5" />,
      color: 'bg-gray-100 border-gray-300',
      textColor: 'text-gray-800',
      applications: ['Správa dat API', '2 core systémy (starý a nový)', 'Cloud infrastruktura'],
      dataObjects: ['Požadavek', 'Autentizace', 'Konfigurace', 'Přístupová oprávnění'],
      capabilities: ['Provoz a správa systémů', 'Řešení incidentů', 'Bezpečnost dat', 'Integrace systémů']
    }
  ];

  const cLevelPositions = [
    { name: 'CCO', fullName: 'Chief Commercial Officer', color: 'bg-blue-50 border-blue-400' },
    { name: 'CHRO', fullName: 'Chief HR Officer', color: 'bg-purple-50 border-purple-400' },
    { name: 'CFO', fullName: 'Chief Financial Officer', color: 'bg-green-50 border-green-400' },
    { name: 'CIO', fullName: 'Chief Information Officer', color: 'bg-gray-50 border-gray-400' }
  ];

  const ccoStructure = [0, 1, 2];
  const chroStructure = [3, 4];
  const cfoStructure = [5, 6];
  const cioStructure = [7, 8];

  const DepartmentCard = ({ dept, index }) => {
    const isExpanded = expandedDepts.includes(index);

    const handleToggle = () => {
      setExpandedDepts(currentDepts =>
        currentDepts.includes(index)
          ? currentDepts.filter(id => id !== index)
          : [...currentDepts, index]
      );
    };

    return (
      <div className={`${dept.color} border-2 rounded-lg p-4 shadow-md hover:shadow-lg transition-all`}>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex items-center gap-2">
            <div className={dept.textColor}>
              {dept.icon}
            </div>
            <h3 className={`font-semibold ${dept.textColor}`}>{dept.name}</h3>
          </div>
          {isExpanded ?
            <ChevronUp className={`w-4 h-4 ${dept.textColor}`} /> :
            <ChevronDown className={`w-4 h-4 ${dept.textColor}`} />
          }
        </div>
        {isExpanded && (
          <div className="mt-3 space-y-3 text-xs">
            <div>
              <div className="font-bold text-gray-700 mb-1">📱 Aplikační vrstva:</div>
              <div className="text-gray-600 space-y-0.5">
                {dept.applications.map((app, i) => (
                  <div key={i}>• {app}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-1">💾 Datové objekty:</div>
              <div className="text-gray-600 space-y-0.5">
                {dept.dataObjects.map((obj, i) => (
                  <div key={i}>• {obj}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-1">⚡ Schopnosti:</div>
              <div className="text-gray-600 space-y-0.5">
                {dept.capabilities.map((cap, i) => (
                  <div key={i}>• {cap}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const OrgStructurePage = () => {
    const areAllExpanded = expandedDepts.length === departments.length;
    const toggleAllDepts = () => {
      if (areAllExpanded) {
        setExpandedDepts([]);
      } else {
        setExpandedDepts(departments.map((_, index) => index));
      }
    };

    return (
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">MagicalMoney s.r.o.</h1>
          <p className="text-gray-600">Organizační struktura společnosti</p>
          <p className="text-sm text-gray-500 mt-1">~100 zaměstnanců | 8 oddělení</p>
          <p className="text-xs text-blue-600 mt-2">💡 Klikněte na oddělení pro zobrazení detailů</p>
          <div className="mt-6">
            <button
              onClick={toggleAllDepts}
              className="flex items-center gap-2 mx-auto bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-2 px-5 rounded-lg text-sm transition-colors shadow-sm"
            >
              <ChevronsUpDown className="w-4 h-4" />
              {areAllExpanded ? 'Zavřít všechna oddělení' : 'Otevřít všechna oddělení'}
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white px-8 py-6 rounded-lg shadow-lg border-2 border-slate-600">
            <div className="text-center">
              <div className="text-2xl font-bold">CEO</div>
              <div className="text-sm text-slate-300 mt-1">Chief Executive Officer</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div className="w-0.5 h-8 bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cLevelPositions.map((position, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`${position.color} border-2 px-6 py-4 rounded-lg shadow-md w-full text-center`}>
                <div className="font-bold text-lg text-gray-800">{position.name}</div>
                <div className="text-xs text-gray-600 mt-1">{position.fullName}</div>
              </div>
              <div className="w-0.5 h-6 bg-gray-400 mt-2 hidden lg:block"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            {ccoStructure.map((index) => (
              <DepartmentCard key={index} dept={departments[index]} index={index} />
            ))}
          </div>
          <div className="space-y-4">
            {chroStructure.map((index) => (
              <DepartmentCard key={index} dept={departments[index]} index={index} />
            ))}
          </div>
          <div className="space-y-4">
            {cfoStructure.map((index) => (
              <DepartmentCard key={index} dept={departments[index]} index={index} />
            ))}
          </div>
          <div className="space-y-4">
            {cioStructure.map((index) => (
              <DepartmentCard key={index} dept={departments[index]} index={index} />
            ))}
          </div>
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Struktura řízení a datová architektura</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div><span className="font-semibold">CCO</span> - Obchodní oddělení (Schvalování, Sales, Marketing)</div>
            <div><span className="font-semibold">CHRO</span> - Lidské zdroje a zákaznická péče</div>
            <div><span className="font-semibold">CFO</span> - Finance a rizika (Payments, Credit Risk)</div>
            <div><span className="font-semibold">CIO</span> - Informační technologie a data</div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Každé oddělení obsahuje: <span className="font-semibold">Aplikační vrstvu</span> (systémy a nástroje),
              <span className="font-semibold"> Datové objekty</span> (data s kterými pracuje) a
              <span className="font-semibold"> Schopnosti</span> (klíčové funkce oddělení)
            </p>
          </div>
        </div>
      </div>
    );
  };

  const DWHArchitecturePage = () => (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Architektura Datového Skladu</h1>
        <p className="text-gray-600">MagicalMoney s.r.o.</p>
      </div>
      <div className="space-y-6">
        <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
          <h4 className="font-bold text-blue-900 mb-3">1. Zdrojové Systémy (Source Systems)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">HR management systém</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">CRM, Web, PPC</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">Správa dat, Autentizace</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">Portál, Platby, ERP</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">Core systém (Vymáhání)</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">Credit Scoring</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">Email/Komunikace</div>
            <div className="bg-white p-2 rounded border border-blue-200 text-gray-800">Reportovací Nástroje</div>
          </div>
        </div>
        <div className="flex justify-center"><div className="text-center"><div className="text-2xl text-gray-400">↓</div><div className="text-xs text-gray-600 font-semibold">Streaming & ETL/ELT</div></div></div>
        <div className="border-2 border-teal-300 rounded-lg p-4 bg-teal-50">
          <h4 className="font-bold text-teal-900 mb-2">2. ODS (Operational Data Store)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-teal-200 text-center text-sm"><div className="font-bold text-teal-700 mb-1">Apache Kafka</div><div className="text-xs text-gray-600">Real-time streaming</div><div className="text-xs text-gray-600">Event-driven architecture</div></div>
            <div className="bg-white p-3 rounded border border-teal-200 text-center text-sm"><Database className="w-6 h-6 mx-auto mb-1 text-teal-700" /><div className="font-bold text-teal-800">ODS Database</div><div className="text-xs text-gray-600">Operační datové úložiště</div></div>
          </div>
        </div>
        <div className="flex justify-center"><div className="text-center"><div className="text-2xl text-gray-400">↓</div><div className="text-xs text-gray-600 font-semibold">ETL Processing</div></div></div>
        <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
          <h4 className="font-bold text-green-900 mb-2">3. Přechodová Vrstva (Stage Layer)</h4>
          <div className="bg-white p-3 rounded border border-green-200 text-center text-sm"><Database className="w-6 h-6 mx-auto mb-1 text-green-700" /><strong className="text-green-900">Staging Area</strong><div className="text-xs text-gray-600 mt-1">Dočasné úložiště pro načtená data z ODS</div></div>
        </div>
        <div className="flex justify-center"><div className="text-center"><div className="text-2xl text-gray-400">↓</div><div className="text-xs text-gray-600 font-semibold">Transformace & Load</div></div></div>
        <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
          <h4 className="font-bold text-purple-900 mb-2">4. Jádro DWH (DWH Core / EDW)</h4>
          <div className="bg-white p-3 rounded border border-purple-200 text-center text-sm"><Database className="w-8 h-8 mx-auto mb-1 text-purple-700" /><strong className="text-purple-900">Datový Sklad - Jádro</strong><div className="text-xs text-gray-600 mt-1">Centrální úložiště všech podnikových dat</div></div>
        </div>
        <div className="flex justify-center"><div className="text-center"><div className="text-2xl text-gray-400">↓</div><div className="text-xs text-gray-600 font-semibold">Distribuce & Agregace</div></div></div>
        <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
          <h4 className="font-bold text-orange-900 mb-3">5. Datová Tržiště (Data Marts)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded border border-orange-200"><Database className="w-5 h-5 mb-2 text-orange-700" /><div className="font-semibold text-sm mb-1 text-orange-900">MART ÚVĚRY</div><div className="text-xs text-gray-600"> • Žádosti o půjčky<br /> • Platby a transakce<br /> • Vymáhání DPD</div></div>
            <div className="bg-white p-3 rounded border border-orange-200"><Database className="w-5 h-5 mb-2 text-orange-700" /><div className="font-semibold text-sm mb-1 text-orange-900">MART RIZIKA</div><div className="text-xs text-gray-600"> • Credit scoring<br /> • Hodnocení rizik<br /> • Systémová bezpečnost</div></div>
            <div className="bg-white p-3 rounded border border-orange-200"><Database className="w-5 h-5 mb-2 text-orange-700" /><div className="font-semibold text-sm mb-1 text-orange-900">MART OBCHOD</div><div className="text-xs text-gray-600"> • Kampaně & marketing<br /> • Zákaznická akvizice<br /> • Analytika & reporty</div></div>
            <div className="bg-white p-3 rounded border border-purple-200 bg-purple-50"><Database className="w-5 h-5 mb-2 text-purple-700" /><div className="font-semibold text-sm mb-1 text-purple-900">MART HR</div><div className="text-xs text-gray-600"> • Zaměstnanci & mzdy<br /> • Školení & rozvoj<br /> • Přístupová oprávnění</div></div>
          </div>
        </div>
        <div className="flex justify-center"><div className="text-center"><div className="text-2xl text-gray-400">↓</div><div className="text-xs text-gray-600 font-semibold">Analýza & Vizualizace</div></div></div>
        <div className="border-2 border-indigo-300 rounded-lg p-4 bg-indigo-50">
          <h4 className="font-bold text-indigo-900 mb-3">6. Aplikační Vrstva (Nástroje)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-white p-3 rounded border border-indigo-200 text-center"><strong className="text-indigo-900">BI Reports a Dashboardy</strong></div>
            <div className="bg-white p-3 rounded border border-indigo-200 text-center"><strong className="text-indigo-900">Self-Service BI</strong></div>
            <div className="bg-white p-3 rounded border border-indigo-200 text-center"><strong className="text-indigo-900">Data Mining/Scoring</strong></div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-100 rounded-lg border border-gray-300 text-center"><div className="font-bold text-gray-800">📋 Metadata Management</div><div className="text-xs text-gray-600 mt-1">Řídí celou architekturu DWH</div></div>
      </div>
    </div>
  );
  
  const InmonModelPage = () => {
    // Kód diagramu zůstává pro referenci při obhajobě
    const diagramCode = `@startuml
' === Stylování ===
skinparam {
    shadowing true
    RoundCorner 15
    BackgroundColor #FFFFFF
    TitleFontColor #1E293B
    TitleFontSize 20
    TitleFontName Helvetica
    ArrowColor #64748B
    ArrowThickness 1.5
    FontName Helvetica
    FontSize 12
}
skinparam class {
    BackgroundColor #F8FAFC
    BorderColor #94A3B8
    BorderThickness 2
    HeaderBackgroundColor #E0E7FF
    FontColor #334155
    FontSize 12
}
hide methods
hide stereotypes
title Inmon Model – Core Data Warehouse Layer

' === Číselníky ===
class Payment_Method { ... }
class Location { ... }
class Store { ... }
' === Master data ===
class Customers { ... }
' === Transakční data ===
class Order_Detail { ... }
class Invoice { ... }
' === Vztahy ===
Payment_Method "1" -- "0..*" Order_Detail : payment_method_code
Store "1" -- "0..*" Order_Detail : store_id
Location "1" -- "0..*" Store : location_id
Customers "1" -- "0..*" Order_Detail : customer_id
Order_Detail "1" -- "1..*" Invoice : so_line_id
@enduml`;

    return (
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Datový Model (Inmon)</h1>
          <p className="text-gray-600">Core vrstva datového skladu</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border">
          {/* ZMĚNA: Používáme naimportovaný obrázek */}
          <img src={dwhDiagram} alt="Inmon Model DWH Diagram" className="max-w-5xl h-auto mx-auto" />
        </div>
      </div>
    );
  };
  
  const PageRenderer = () => {
    switch (currentPage) {
      case 'org':
        return <OrgStructurePage />;
      case 'dwh':
        return <DWHArchitecturePage />;
      case 'inmon':
        return <InmonModelPage />;
      default:
        return <OrgStructurePage />;
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setCurrentPage('org')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentPage === 'org' ? 'bg-slate-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}
          >
            📊 Organizační struktura
          </button>
          <button
            onClick={() => setCurrentPage('dwh')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentPage === 'dwh' ? 'bg-slate-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}
          >
            🗄️ Architektura DWH
          </button>
          <button
            onClick={() => setCurrentPage('inmon')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentPage === 'inmon' ? 'bg-slate-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}
          >
            🧬 Datový model (Inmon)
          </button>
        </div>
      </div>
      
      <PageRenderer />
    </div>
  );
};

export default MagicalMoneyDashboard;