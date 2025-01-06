/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			primary: 'var(--primary)',
  			secondary: 'var(--secondary)',
  			third: 'var(--third)',
  			default: 'var(--default)',
  			text: {
  				primary: 'var(--text-primary)',
  				secondary: 'var(--text-secondary)',
  				default: 'var(--text-default)'
  			},
  			btn: {
  				primary: 'var(--btn-primary)',
  				secondary: 'var(--btn-secondary)',
  				default: 'var(--btn-default)'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
