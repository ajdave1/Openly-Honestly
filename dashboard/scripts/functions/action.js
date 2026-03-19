export const controllers = {
  getdevotions: async () => {
    const api_url = "https://localhost/openlyandhonestly/devotion_api.php";

    const allDevotions = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "read_all",
      }),
    });

    const data = await allDevotions.json();
    return data;
  },
  
};
