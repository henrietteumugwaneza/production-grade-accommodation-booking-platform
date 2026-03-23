# Accommodation Booking Platform (Airbnb Clone)

A production-grade accommodation booking platform built with React, Vite, and modern state management tools. This application demonstrates complex state management patterns, efficient data fetching, and caching strategies.

## 🚀 Features

- **Dynamic Listings**: Real-time property listings fetched from Airbnb API
- **Advanced Filtering**: Filter by price range, rating, and location
- **Search Functionality**: Search destinations with URL parameter updates
- **Favorites System**: Save favorite listings with localStorage persistence
- **Booking Management**: Complete booking flow with Zustand state management
- **Protected Routes**: Authentication-based route protection
- **Responsive Design**: Mobile, tablet, and desktop support
- **Optimized Performance**: TanStack Query caching and background updates

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM v7
- **State Management**: 
  - Context API (Favorites)
  - Zustand (Bookings)
  - TanStack Query (Server State)
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **API**: Airbnb API via RapidAPI

## 📁 Project Structure

```
airbnb-clone/
├── src/
│   ├── app/
│   │   └── queryClient.js          # TanStack Query configuration
│   ├── components/
│   │   ├── BookingForm.jsx         # Booking form component
│   │   ├── ErrorState.jsx          # Error display component
│   │   ├── FilterPanel.jsx         # Sidebar filter component
│   │   ├── ListingCard.jsx         # Property card component
│   │   ├── ListingSection.jsx      # Listings grid section
│   │   ├── Loader.jsx              # Loading spinner
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── ProtectedRoute.jsx      # Route protection HOC
│   │   └── SearchBar.jsx           # Search input component
│   ├── context/
│   │   └── FavoritesContext.jsx    # Global favorites state
│   ├── layouts/
│   │   └── MainLayout.jsx          # Main page layout
│   ├── pages/
│   │   ├── Bookings.jsx            # Bookings dashboard
│   │   ├── Favorites.jsx           # Saved listings page
│   │   ├── Home.jsx                # Main listings feed
│   │   ├── ListingDetails.jsx      # Property details page
│   │   └── Login.jsx               # Authentication page
│   ├── services/
│   │   ├── api.js                  # Axios configuration
│   │   └── listings.js             # API data fetching & normalization
│   ├── stores/
│   │   └── bookingStore.js         # Zustand booking store
│   ├── utils/
│   │   └── mockData.js             # Fallback mock data
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── .env                            # Environment variables
├── package.json
└── README.md
```

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- RapidAPI account with Airbnb API access

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd airbnb-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_RAPID_API_KEY=your_rapidapi_key_here
   ```
   
   **Important**: 
   - Get your API key from [RapidAPI Airbnb API](https://rapidapi.com/DataCrawler/api/airbnb19)
   - Never commit your `.env` file to version control
   - The `.env` file must be in the root directory (not in `src/`)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔌 API Integration

### Airbnb API Configuration

The application uses a centralized Axios instance configured in `src/services/api.js`:

```javascript
const apiClient = axios.create({
  baseURL: 'https://airbnb19.p.rapidapi.com/api/v2',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'airbnb19.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
});
```

### API Endpoints Used

1. **Search Properties**: `/searchPropertyByPlaceId`
   - Fetches listings by location
   - Supports filtering parameters

2. **Property Details**: `/getPropertyDetails`
   - Fetches detailed information for a single listing

### Data Normalization

API responses are normalized in `src/services/listings.js` to ensure consistent data structure:

```javascript
{
  id: string,
  name: string,
  location: string,
  price: number,
  rating: number,
  images: string[],
  description: string,
  amenities: string[],
  host: object
}
```

## 📊 State Management

### 1. Local State (useState)
- Form inputs
- UI toggles
- Component-specific data

### 2. Global State (Context API)
- **FavoritesContext**: Manages favorite listings
- Persisted to localStorage
- Available across all components

### 3. Advanced State (Zustand)
- **bookingStore**: Manages booking operations
- Persisted to localStorage
- Supports add, cancel, and remove operations

### 4. Server State (TanStack Query)
- **Listings data**: Cached for 5 minutes
- **Listing details**: Cached per property
- Automatic background refetching
- Error handling and retry logic

## 🎯 Key Features Implementation

### Caching Strategy
```javascript
useQuery({
  queryKey: ["listings"],
  queryFn: getListings,
  staleTime: 1000 * 60 * 5,  // 5 minutes
  cacheTime: 1000 * 60 * 10  // 10 minutes
});
```

### Filter Integration
- Filters trigger client-side filtering (no API refetch)
- Optimized with useMemo for performance
- Supports price range, rating, and location

### Search Functionality
- Updates URL parameters
- Filters listings client-side
- Maintains search state across navigation

### Protected Routes
- `/bookings` requires authentication
- Redirects to `/login` if not authenticated
- Simple localStorage-based auth (demo purposes)

## 🔒 Security Notes

- API keys stored in environment variables
- Never hardcode credentials
- `.env` file excluded from git via `.gitignore`
- Authentication is simplified for demo (use proper auth in production)

## 🎨 UI/UX Features

- **Responsive Design**: Works on all screen sizes
- **Loading States**: Spinner during data fetching
- **Error Handling**: User-friendly error messages
- **Optimistic Updates**: Immediate UI feedback
- **Smooth Transitions**: CSS transitions for better UX
- **Accessibility**: Semantic HTML and ARIA labels

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Error Handling

The application handles:
- API rate limits (429 errors)
- Invalid API keys (401 errors)
- Network failures
- Missing data
- Fallback to mock data when API fails

## 🚀 Performance Optimizations

1. **TanStack Query Caching**: Reduces unnecessary API calls
2. **useMemo**: Optimizes filter calculations
3. **Code Splitting**: React.lazy for route-based splitting
4. **Image Optimization**: Lazy loading and placeholders
5. **Debounced Search**: Prevents excessive filtering

## 📦 Dependencies

### Production
- react: ^19.2.4
- react-dom: ^19.2.4
- react-router-dom: ^7.13.1
- @tanstack/react-query: ^5.91.3
- axios: ^1.13.6
- zustand: ^5.0.12
- tailwindcss: ^4.2.2

### Development
- vite: ^8.0.1
- @vitejs/plugin-react: ^6.0.1
- eslint: ^9.39.4

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning and development.

## 👨‍💻 Author

Built as a learning project to demonstrate modern React patterns and state management.

## 🙏 Acknowledgments

- Airbnb API by DataCrawler on RapidAPI
- React team for amazing documentation
- TanStack Query for excellent caching solution
