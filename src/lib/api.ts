


const API_URL = "https://api.hr.constel.co/api/v1";

// Funkcija za login
export async function loginUser(email: string, password: string) {
  console.log(" Šaljem podatke na API...");
  console.log(" Email:", email);
  console.log(" Password:", password);
  
  try {
    // Saljemo POST request na API
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    console.log(" Odgovor stigao!");
    console.log(" Status:", response.status);
    
    //  Parsiramo odgovor
    const data = await response.json();
    console.log(" Podaci:", data);
    
    //  Proveri da li je uspešno
    if (response.ok) {
      // USPEŠNO - vraća token i podatke
      console.log(" Login uspešan!");
      return { success: true, data: data };
    } else {
      // GREŠKA - vraća poruku o grešci
      console.log(" Login nije uspeo:", data.error?.message);
      return { 
        success: false, 
        error: data.error?.message || "Došlo je do greške" 
      };
    }
    
  } catch (error) {
    // 6. Ako nešto potpuno pođe po zlu (nema interneta, itd)
    console.error(" Velika greška:", error);
    return { 
      success: false, 
      error: "Problem sa konekcijom. Proverite internet." 
    };
  }
}