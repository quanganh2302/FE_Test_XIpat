import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			colors: {
  				text: '#08030d',
  				textWhite: '#f7f3fc',
  				bg: '#f7f3fc',
  				primary: '#8743ce',
  				secondary: '#e089bb',
  				accent: '#d55f7c',
  				textcontrast: '#64d97b',
  				bgcontrast: '#64d97b',
  				primarycontrast: '#ffdd00',
  				secondarycontrast: '#64d97b',
  				accentcontrast: '#ffdd00',
  				text5: 'hsl(270, 63%, 3%, 5%)',
  				text10: 'hsl(270, 63%, 3%, 10%)',
  				text15: 'hsl(270, 63%, 3%, 15%)',
  				text20: 'hsl(270, 63%, 3%, 20%)',
  				text25: 'hsl(270, 63%, 3%, 25%)',
  				text30: 'hsl(270, 63%, 3%, 30%)',
  				text35: 'hsl(270, 63%, 3%, 35%)',
  				text40: 'hsl(270, 63%, 3%, 40%)',
  				text45: 'hsl(270, 63%, 3%, 45%)',
  				text50: 'hsl(270, 63%, 3%, 50%)',
  				text55: 'hsl(270, 63%, 3%, 55%)',
  				text60: 'hsl(270, 63%, 3%, 60%)',
  				text65: 'hsl(270, 63%, 3%, 65%)',
  				text70: 'hsl(270, 63%, 3%, 70%)',
  				text75: 'hsl(270, 63%, 3%, 75%)',
  				text80: 'hsl(270, 63%, 3%, 80%)',
  				text85: 'hsl(270, 63%, 3%, 85%)',
  				text90: 'hsl(270, 63%, 3%, 90%)',
  				text95: 'hsl(270, 63%, 3%, 95%)',
  				primary5: 'hsl(269, 59%, 54%, 5%)',
  				primary10: 'hsl(269, 59%, 54%, 10%)',
  				primary15: 'hsl(269, 59%, 54%, 15%)',
  				primary20: 'hsl(269, 59%, 54%, 20%)',
  				primary25: 'hsl(269, 59%, 54%, 25%)',
  				primary30: 'hsl(269, 59%, 54%, 30%)',
  				primary35: 'hsl(269, 59%, 54%, 35%)',
  				primary40: 'hsl(269, 59%, 54%, 40%)',
  				primary45: 'hsl(269, 59%, 54%, 45%)',
  				primary50: 'hsl(269, 59%, 54%, 50%)',
  				primary55: 'hsl(269, 59%, 54%, 55%)',
  				primary60: 'hsl(269, 59%, 54%, 60%)',
  				primary65: 'hsl(269, 59%, 54%, 65%)',
  				primary70: 'hsl(269, 59%, 54%, 70%)',
  				primary75: 'hsl(269, 59%, 54%, 75%)',
  				primary80: 'hsl(269, 59%, 54%, 80%)',
  				primary85: 'hsl(269, 59%, 54%, 85%)',
  				primary90: 'hsl(269, 59%, 54%, 90%)',
  				primary95: 'hsl(269, 59%, 54%, 95%)',
  				secondary5: 'hsl(326, 58%, 71%, 5%)',
  				secondary10: 'hsl(326, 58%, 71%, 10%)',
  				secondary15: 'hsl(326, 58%, 71%, 15%)',
  				secondary20: 'hsl(326, 58%, 71%, 20%)',
  				secondary25: 'hsl(326, 58%, 71%, 25%)',
  				secondary30: 'hsl(326, 58%, 71%, 30%)',
  				secondary35: 'hsl(326, 58%, 71%, 35%)',
  				secondary40: 'hsl(326, 58%, 71%, 40%)',
  				secondary45: 'hsl(326, 58%, 71%, 45%)',
  				secondary50: 'hsl(326, 58%, 71%, 50%)',
  				secondary55: 'hsl(326, 58%, 71%, 55%)',
  				secondary60: 'hsl(326, 58%, 71%, 60%)',
  				secondary65: 'hsl(326, 58%, 71%, 65%)',
  				secondary70: 'hsl(326, 58%, 71%, 70%)',
  				secondary75: 'hsl(326, 58%, 71%, 75%)',
  				secondary80: 'hsl(326, 58%, 71%, 80%)',
  				secondary85: 'hsl(326, 58%, 71%, 85%)',
  				secondary90: 'hsl(326, 58%, 71%, 90%)',
  				secondary95: 'hsl(326, 58%, 71%, 95%)',
  				static1: '#EFEBF4'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
  plugins: [require("tailwindcss-animate")],
};
export default config;
