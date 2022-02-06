// Data content
//=================================================================================
//Section "What People Say"
const packImages = [
  `<img data-act_img="JENKINS" src="img/S7People Say/JENKINS.jpg" alt="JENKINS">`,
  `<img data-act_img="PHILLIPS" src="img/S7People Say/PHILLIPS.jpg" alt="PHILLIPS"> `,
  `<img data-act_img="BURNS" src="img/S7People Say/BURNS.jpg" alt="BURNS">`,
  `<img data-act_img="DAY" src="img/S7People Say/DAY.jpg" alt="DAY">`,
  `<img data-act_img="WEAVER" src="img/S7People Say/WEAVER.png" alt="WEAVER">`,
  `<img data-act_img="CUMMINGS" src="img/S7People Say/CUMMINGS.jpg" alt="CUMMINGS">`,
  `<img data-act_img="EVANS" src="img/S7People Say/EVANS.jpg" alt="EVANS">`,
  `<img data-act_img="BARNETT" src="img/S7People Say/BARNETT.jpg" alt="BARNETT">`,
  `<img data-act_img="FOSTER" src="img/S7People Say/FOSTER.jpg" alt="FOSTER">`,
  `<img data-act_img="MORTON" src="img/S7People Say/MORTON.jpg" alt="MORTON">`,
  `<img data-act_img="ROSS" src="img/S7People Say/ROSS.jpg" alt="ROSS">`,
  `<img data-act_img="PARRISH" src="img/S7People Say/PARRISH.jpg" alt="PARRISH">`,
];
//--------------------------------------

const contentForImages = {
  JENKINS: `<div class="content_for_image" data-act_img="JENKINS">
    ALorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quidem quisquam sapiente
    possimus voluptatum, distinctio vitae culpa, voluptates accusamus laudantium quos! Eos
    commodi facilis corporis assumenda q <br>
    <span>Damian Jenkins </span><br>
    <span>System(s) Administrator</span>
</div>`,
  PHILLIPS: `<div class="content_for_image" data-act_img="PHILLIPS">
    BLorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cum temporibus, fugit
    assumenda necessitatibus inventore fuga adipisci in sunt enim, labore quas minus mollitia
    totam beatae! Recusandae, commodi! Inventore, ex.
    <br>
    <span>Vera Phillips </span><br>
    <span>Network Administrator</span>
</div>`,
  BURNS: ` <div class="content_for_image" data-act_img="BURNS">
    CLorem ipsum, dolor sit amet consectetur adipisicing elit. Labore recusandae dolorem
    perspiciatis deleniti. Quo pariatur iusto velit excepturi adipisci eum non. Fugiat nihil
    asperiores non eum, voluptas itaque
    <br>
    <span>Jack Burns </span><br>
    <span>System(s) Engineer</span>
</div>`,
  DAY: ` <div class="content_for_image" data-act_img="DAY">
    DLorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quae? Tempore accusantium
    doloribus libero non maxime architecto laudantium vero suscipit. Sit similique ut rem soluta
    neque, nesciunt nam dolores nemo.eriores, cum temporibus, fugit assumenda necessitatibus
    i
    <br>
    <span>Quentin Day</span><br>
    <span>Architect</span>
</div>`,
  WEAVER: `<div class="content_for_image content_for_act-img" data-act_img="WEAVER">
    ELorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla facilis
    dolore. Dignissimos nulla sit suscipit tenetur hic.eriores, cum temporibus,
    <br>
    <span>John Weaver</span><br>
    <span>Senior Engineer</span>
</div>`,
  CUMMINGS: `  <div class="content_for_image" data-act_img="CUMMINGS">
    FLorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla facilis
    dolore. Dignissimos
    <br>
    <span>William Cummings</span><br>
    <span>Software Developer</span>
</div>`,
  EVANS: `  <div class="content_for_image" data-act_img="EVANS">
    GLorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla facilis
    dolore. Dignissimos nulla sit suscipit tenetur hic.eriores, c
    <br>
    <span>Matthew Evans</span><br>
    <span>Tester</span>
</div>`,
  BARNETT: `  <div class="content_for_image" data-act_img="BARNETT">
    HLorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla facilis
    dolore. Dignissimos
    <br>
    <span>Simon Barnett</span><br>
    <span>Project Manager</span>
</div>`,
  FOSTER: ` <div class="content_for_image" data-act_img="FOSTER">
    ILorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla facilis
    dolore. Dignissimos
    <br>
    <span>Peter Foster</span><br>
    <span>Team Leader</span>
</div>`,
  MORTON: ` <div class="content_for_image" data-act_img="MORTON">
    JLorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla
    <br>
    <span>Richard Morton</span><br>
    <span>Chief Technology Officer</span>
</div>`,
  ROSS: `  <div class="content_for_image" data-act_img="ROSS">
    KLorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla
    <br>
    <span>Kerry Ross</span><br>
    <span>System(s) Administrator</span>
</div>`,
  PARRISH: `  <div class="content_for_image" data-act_img="PARRISH">
    LLorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam ex temporibus
    consequuntur, quo, recusandae consectetur atque tempore incidunt, rem nesciunt nulla facilis
    dolore. Dignissimos nulla sit suscipit tenetur hic.eriores, cum temporibus,
    <br>
    <span>Kenneth Parrish</span><br>
    <span>Chief Information Officer</span>
</div>`,
};
//=====================================================================================
//Section "Our Amazing Work"
//More images to load
const firstImagesGroup = [
  `<div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a>
                            <img src="img/S3-Our Amazing Work/graphic-design4.jpg" alt="graphic-design">
                        </div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/web-design4.jpg" alt="web-design"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/landing-pages4.jpg" alt="landing-pages"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/wordpress4.jpg" alt="wordpress"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/graphic-design5.jpg" alt="graphic-design"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/web-design5.jpg" alt="web-design"></div>`,
  `<div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/landing-pages5.jpg" alt="landing-pages"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/wordpress5.png" alt="wordpress"></div>`,
  `  <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/graphic-design6.jpg" alt="graphic-design"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/web-design6.jpg" alt="web-design"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/landing-pages6.jpg" alt="landing-pages"></div>`,
  ` <div class="amazing-work_images_item first_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/wordpress6.jpg" alt="wordpress"></div>`,
];
const secondImagesGroup =[
                       ` <div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a>
                            <img src="img/S3-Our Amazing Work/graphic-design7.jpg" alt="graphic-design">
                        </div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/web-design7.jpg" alt="web-design"></div>`,
                       ` <div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/landing-pages7.jpg" alt="landing-pages"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/wordpress7.jpg" alt="wordpress"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/graphic-design8.jpg" alt="graphic-design"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/web-design8.jpg" alt="web-design"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/landing-pages8.jpg" alt="landing-pages"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/wordpress8.jpg" alt="wordpress"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/graphic-design9.jpg" alt="graphic-design"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/web-design9.jpg" alt="web-design"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/landing-pages9.jpg" alt="landing-pages"></div>`,
                        `<div class="amazing-work_images_item second_images_group"><a href="#" class="img_layer"><svg
                                    width="88" height="43" viewBox="0 0 88 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                        fill="#1FDAB5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                        fill="#18CFAB" />
                                    <rect x="60" y="17" width="12" height="11" fill="white" />
                                </svg>
                                <span>
                                    creative design
                                </span>
                                <span>
                                    Web Design
                                </span>
                            </a><img src="img/S3-Our Amazing Work/wordpress9.jpg" alt="wordpress"></div>`
]
//===============================================================================================//
//Section "Gallery of best images"
//More images to load
const moreBestImages = 
                       ` <div class=" grid-item"><img src="img/S5-Gallery of Best Images/Shore.jpg"
                                alt="Shore"></div>
                        <div class=" grid-item"><img src="img/S5-Gallery of Best Images/hotel.jpg"
                                alt="hotel"></div>`
