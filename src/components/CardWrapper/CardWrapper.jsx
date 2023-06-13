import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardWrapper.css";

const CardWrapper = () => {
  const [results, setResults] = useState([
    {
      adult: false,
      backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 8363.473,
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 7.4,
      vote_count: 1347
    },
    {
      adult: false,
      backdrop_path: "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
      genre_ids: [28, 53, 80],
      id: 603692,
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      popularity: 4210.313,
      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      release_date: "2023-03-22",
      title: "John Wick: Chapter 4",
      video: false,
      vote_average: 7.9,
      vote_count: 2896
    },
    {
      adult: false,
      backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 3394.458,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.8,
      vote_count: 4628
    },
    {
      adult: false,
      backdrop_path: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
      genre_ids: [28, 12, 16, 878],
      id: 569094,
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      popularity: 2859.047,
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      release_date: "2023-05-31",
      title: "Spider-Man: Across the Spider-Verse",
      video: false,
      vote_average: 8.8,
      vote_count: 1160
    },
    {
      adult: false,
      backdrop_path: "/8FhKnPpql374qyyHAkZDld93IUw.jpg",
      genre_ids: [9648, 53, 878],
      id: 536437,
      original_language: "en",
      original_title: "Hypnotic",
      overview:
        "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
      popularity: 2654.854,
      poster_path: "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
      release_date: "2023-05-11",
      title: "Hypnotic",
      video: false,
      vote_average: 6.5,
      vote_count: 154
    },
    {
      adult: false,
      backdrop_path: "/9NgtktUFLm9cnFDFaekx2ROh84f.jpg",
      genre_ids: [28, 12, 878],
      id: 667538,
      original_language: "en",
      original_title: "Transformers: Rise of the Beasts",
      overview:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      popularity: 2453.807,
      poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      release_date: "2023-06-06",
      title: "Transformers: Rise of the Beasts",
      video: false,
      vote_average: 7.4,
      vote_count: 195
    },
    {
      adult: false,
      backdrop_path: "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
      genre_ids: [27, 53],
      id: 890771,
      original_language: "en",
      original_title: "The Black Demon",
      overview:
        "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
      popularity: 1777.2,
      poster_path: "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
      release_date: "2023-04-26",
      title: "The Black Demon",
      video: false,
      vote_average: 6.5,
      vote_count: 151
    },
    {
      adult: false,
      backdrop_path: "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
      genre_ids: [12, 10751, 14, 10749],
      id: 447277,
      original_language: "en",
      original_title: "The Little Mermaid",
      overview:
        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      popularity: 1448.64,
      poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      release_date: "2023-05-18",
      title: "The Little Mermaid",
      video: false,
      vote_average: 6.2,
      vote_count: 616
    },
    {
      adult: false,
      backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
      genre_ids: [878, 12, 28],
      id: 76600,
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      popularity: 1344.884,
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      release_date: "2022-12-14",
      title: "Avatar: The Way of Water",
      video: false,
      vote_average: 7.7,
      vote_count: 8493
    },
    {
      adult: false,
      backdrop_path: "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
      genre_ids: [53, 27],
      id: 713704,
      original_language: "en",
      original_title: "Evil Dead Rise",
      overview:
        "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      popularity: 1285.781,
      poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
      release_date: "2023-04-12",
      title: "Evil Dead Rise",
      video: false,
      vote_average: 7.1,
      vote_count: 1597
    },
    {
      adult: false,
      backdrop_path: "/6fYTLy4QE55BgMiHF3Co7bErjry.jpg",
      genre_ids: [10752, 53, 28, 12, 9648, 878, 18],
      id: 1018494,
      original_language: "en",
      original_title: "Operation Seawolf",
      overview:
        "During the last days of World War II, Germany, desperate for any last grasp to defeat the allied powers, looked to their last remaining weapons and soldiers. The German Navy and the last remaining U-Boats were formed together for one desperate last mission – a mission to attack the United States Homeland, known as Operation Seawolf. Captain Hans Kessler, a grizzled submarine commander from both World Wars, is called into service to make one mission a success and help turn the tide of the war.",
      popularity: 1269.136,
      poster_path: "/eqm5EAyC9hJCN5qutuW4Ka1xYbU.jpg",
      release_date: "2022-10-07",
      title: "Operation Seawolf",
      video: false,
      vote_average: 6,
      vote_count: 41
    },
    {
      adult: false,
      backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      genre_ids: [878, 12, 28],
      id: 447365,
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      popularity: 1262.366,
      poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      release_date: "2023-05-03",
      title: "Guardians of the Galaxy Vol. 3",
      video: false,
      vote_average: 8.1,
      vote_count: 1932
    },
    {
      adult: false,
      backdrop_path: "/pNOccytgkGuyofTLmh1sqEfTJuE.jpg",
      genre_ids: [10749, 18],
      id: 1010581,
      original_language: "es",
      original_title: "Culpa mía",
      overview:
        "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
      popularity: 1170.67,
      poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      release_date: "2023-06-08",
      title: "My Fault",
      video: false,
      vote_average: 8.3,
      vote_count: 313
    },
    {
      adult: false,
      backdrop_path: "/9Hk9qdCyce04VXNQuDXAK1d138E.jpg",
      genre_ids: [28, 12, 878],
      id: 640146,
      original_language: "en",
      original_title: "Ant-Man and the Wasp: Quantumania",
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      popularity: 1167.79,
      poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
      release_date: "2023-02-15",
      title: "Ant-Man and the Wasp: Quantumania",
      video: false,
      vote_average: 6.5,
      vote_count: 3229
    },
    {
      adult: false,
      backdrop_path: "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
      genre_ids: [28, 10752],
      id: 840326,
      original_language: "fi",
      original_title: "Sisu",
      overview:
        "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
      popularity: 1146.052,
      poster_path: "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
      release_date: "2023-01-27",
      title: "Sisu",
      video: false,
      vote_average: 7.4,
      vote_count: 656
    },
    {
      adult: false,
      backdrop_path: "/r2tDSD6kcHflPzsGepl8aTPTWxy.jpg",
      genre_ids: [28, 35, 80],
      id: 879444,
      original_language: "en",
      original_title: "Accident Man: Hitman's Holiday",
      overview:
        "The Accident Man is back, and this time he must best the top assassins in the world to protect the ungrateful son of a mafia boss, save the life of his only friend and rekindle his relationship with his maniacal father figure.",
      popularity: 1117.559,
      poster_path: "/npW9nfL7F3ZVpaCpabqo98KTLw6.jpg",
      release_date: "2022-10-14",
      title: "Accident Man: Hitman's Holiday",
      video: false,
      vote_average: 6.6,
      vote_count: 79
    },
    {
      adult: false,
      backdrop_path: "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
      genre_ids: [27, 53],
      id: 758323,
      original_language: "en",
      original_title: "The Pope's Exorcist",
      overview:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      popularity: 1037.514,
      poster_path: "/gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
      release_date: "2023-04-05",
      title: "The Pope's Exorcist",
      video: false,
      vote_average: 7.2,
      vote_count: 1375
    },
    {
      adult: false,
      backdrop_path: "/ArKDl3GsFpSdDNFnXftNexuEVGF.jpg",
      genre_ids: [28, 12],
      id: 1073140,
      original_language: "en",
      original_title: "The Three Musketeers",
      overview:
        "France is in turmoil and a new, naive King finds himself manipulated by the evil Cardinal Richelieu. With a corrupt commander of the royal guard by his side the Cardinal employs the expertise of the devious and wicked Milady de Winter in a plot to bring down the monarchy and drag the country into war. As France burns the Cardinal will take control. All that stands between them and victory are the remnants of an elite group who wore loyalty to crown and country. Above all else The Musketeers will stand against the odds to foil this deadly plot.",
      popularity: 988.223,
      poster_path: "/l72yy6rPzsH8eHhEOknxlipkV95.jpg",
      release_date: "2023-03-23",
      title: "The Three Musketeers",
      video: false,
      vote_average: 5.4,
      vote_count: 25
    },
    {
      adult: false,
      backdrop_path: "/gFiPQZh6W2qEVKYnAQjtq66qJqI.jpg",
      genre_ids: [53, 18, 28],
      id: 1107872,
      original_language: "pl",
      original_title: "Dzień Matki",
      overview:
        "Nina, a former NATO special operations agent living in hiding, has to use all her deadly skills to rescue her son who has been kidnapped by ruthless gangsters. Finding Max is a double opportunity for her. A chance to feel the adrenaline rush again, and an opportunity to get back into the life of the son she had to abandon years ago.",
      popularity: 969.714,
      poster_path: "/wws9Z90DdZ7D0n3gdzFSZ6cntJi.jpg",
      release_date: "2023-05-24",
      title: "Mother's Day",
      video: false,
      vote_average: 6,
      vote_count: 94
    },
    {
      adult: false,
      backdrop_path: "/oUeqFfImkFDRxTjwhS6KZ5MB8lL.jpg",
      genre_ids: [28, 18, 10752],
      id: 1098110,
      original_language: "de",
      original_title: "Blood & Gold",
      overview:
        "At the end of World War II, a German soldier is looking for his daughter while an SS troop is looking for a Jewish treasure.",
      popularity: 957.2,
      poster_path: "/xayG1dbIjJkmvimekx6TNrMOXmA.jpg",
      release_date: "2023-04-21",
      title: "Blood & Gold",
      video: false,
      vote_average: 6.7,
      vote_count: 164
    }
  ]);

  return (
    <div className="card-container">
      {results.map((item) => {
        return (
          <Card
            key={item.id}
            overview={item.overview.substring(1, 100)}
            title={item.original_title}
            img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
