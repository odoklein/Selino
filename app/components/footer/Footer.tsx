import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Aide Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Aide</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/questions-frequentes" className="text-sm text-gray-600 hover:text-black">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link href="/suivre-commande" className="text-sm text-gray-600 hover:text-black">
                  Suivre ma commande
                </Link>
              </li>
              <li>
                <Link href="/carte-cadeau" className="text-sm text-gray-600 hover:text-black">
                  Carte cadeau
                </Link>
              </li>
              <li>
                <Link href="/magasins" className="text-sm text-gray-600 hover:text-black">
                  Services en magasin
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/qui-sommes-nous" className="text-sm text-gray-600 hover:text-black">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href="/recrutement" className="text-sm text-gray-600 hover:text-black">
                  Rejoindre notre équipe
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-sm text-gray-600 hover:text-black">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/durabilite" className="text-sm text-gray-600 hover:text-black">
                  Qualités et caractéristiques
                </Link>
              </li>
              <li>
                <Link href="/environnement" className="text-sm text-gray-600 hover:text-black">
                  Responsabilité sociale des entreprises
                </Link>
              </li>
            </ul>
          </div>

          {/* Notre Appli Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Notre appli</h3>
            <div className="flex space-x-2 mb-6">
              <div className="h-10 w-32 bg-gray-200 rounded"></div>
              <div className="h-10 w-32 bg-gray-200 rounded"></div>
            </div>
            
            <h3 className="text-sm font-medium text-gray-900 mb-4">Moyens de paiement</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="h-6 w-10 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Suivez-nous !</h3>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Link href="#" key={index} className="text-gray-500 hover:text-black">
                  <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <Link href="/cookies" className="hover:text-black">
            Préférences de cookies
          </Link>
          <Link href="/confidentialite" className="hover:text-black">
            Politique de confidentialité
          </Link>
          <Link href="/conditions" className="hover:text-black">
            Conditions d&apos;utilisation
          </Link>
          <Link href="/gestion-cookies" className="hover:text-black">
            Politique de gestion de cookies
          </Link>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Selino. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;