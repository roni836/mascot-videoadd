import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => (
  <>
    <Header />
    <section className="min-h-screen py-16 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Ochrana osobných údajov</h1>
        <p className="mb-4">Vaše súkromie je pre nás dôležité. Pri spracúvaní osobných údajov dbáme na dodržiavanie platnej legislatívy, najmä Zákona č. 18/2018 Z. z. o ochrane osobných údajov a Nariadenia GDPR (EÚ) 2016/679.</p>
        <h2 className="font-semibold mt-6 mb-2">1. Aké údaje spracúvame?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Meno a priezvisko</li>
          <li>E-mailová adresa</li>
          <li>Telefónne číslo (ak ho uvediete)</li>
          <li>IP adresa, údaje z cookies</li>
        </ul>
        <h2 className="font-semibold mt-6 mb-2">2. Účely spracúvania údajov</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Komunikácia v súvislosti so službami alebo dopytmi</li>
          <li>Spracovanie objednávok a fakturácia</li>
          <li>Zlepšovanie funkčnosti webstránky (analýza, cookies)</li>
          <li>Plnenie zákonných povinností</li>
        </ul>
        <h2 className="font-semibold mt-6 mb-2">3. Právne základy</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Súhlase dotknutej osoby</li>
          <li>Plnení zmluvného vzťahu</li>
          <li>Zákonnej povinnosti</li>
          <li>Oprávnenom záujme (napr. bezpečnosť webu, štatistiky)</li>
        </ul>
        <h2 className="font-semibold mt-6 mb-2">4. Komu môžu byť údaje poskytnuté?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Externých poskytovateľov IT alebo hostingu (na základe zmluvy)</li>
          <li>Štátnych orgánov, ak to vyžaduje zákon</li>
        </ul>
        <h2 className="font-semibold mt-6 mb-2">5. Doba uchovávania údajov</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Údaje z formulárov: max. 12 mesiacov</li>
          <li>Fakturačné údaje: podľa zákona (10 rokov)</li>
          <li>Cookies: podľa nastavenia prehliadača (viď nižšie)</li>
        </ul>
        <h2 className="font-semibold mt-6 mb-2">6. Používanie cookies</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Zabezpečiť technické fungovanie webu</li>
          <li>Zlepšovať užívateľský zážitok</li>
          <li>Vykonávať anonymnú štatistiku návštevnosti (napr. Google Analytics)</li>
        </ul>
        <p className="mb-4">Používanie cookies si môžete upraviť alebo zablokovať vo vašom prehliadači.</p>
        <h2 className="font-semibold mt-6 mb-2">7. Vaše práva</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Prístup k vašim údajom</li>
          <li>Opravu nesprávnych údajov</li>
          <li>Vymazanie údajov (ak to zákon umožňuje)</li>
          <li>Obmedzenie spracúvania</li>
          <li>Prenosnosť údajov</li>
          <li>Odvolanie súhlasu</li>
          <li>Podanie sťažnosti na Úrad na ochranu osobných údajov</li>
        </ul>
        <h2 className="font-semibold mt-6 mb-2">8. Kontakt</h2>
        <address className="not-italic mb-4">
          OREM VENTURES s.r.o.<br />
          Kostolná 299/27, 991 26 Nenince<br />
          IČO: 52514901<br />
          DIČ: 2121045058<br />
          Nie sme platiteľ DPH<br />
          Email: <a href="mailto:cyril@leonlogic.sk" className="text-purple-700 underline">cyril@leonlogic.sk</a>
        </address>
        <div className="text-sm text-gray-500">Dátum poslednej aktualizácie: 11.07.2025</div>
      </div>
    </section>
    <Footer />
  </>
);

export default PrivacyPolicy; 