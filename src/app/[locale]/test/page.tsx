"use client";

import {
  Accordion,
  AnimationLoading,
  AnimationScrollDown,
  AnimationText,
  AnimationTextGradient,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Divider,
  Drawer,
  Footer,
  HelperGrid,
  HelperSkeleton,
  IconBrush,
  IconCalendar,
  IconCheck,
  IconClock,
  IconDown,
  IconFirst,
  IconGear,
  IconGlobe,
  IconLast,
  IconLeft,
  IconRight,
  IconSun,
  IconUp,
  ImageCarousel,
  ImageGrid,
  ImageViewer,
  InputCheckbox,
  InputColor,
  InputRadio,
  InputRange,
  InputRangeDual,
  InputSelect,
  InputSelectMultiple,
  InputText,
  Login,
  Menu,
  Modal,
  NavigationBar,
  NavigationBarBottom,
  Notification,
  NotificationCard,
  Pagination,
  SelectorLanguage,
  SelectorTheme,
  SocialMediaLinks,
  SubMenu,
  Table,
  Tabs,
  Tooltip,
} from "kriz-ui-next";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  STRINGS_ARRAY,
  TABLE_ROWS,
  footerLinksList,
  navigationBottomLinksList,
  navigationLinksList,
  sampleText,
  sampleTextSmall,
  socialMediaLinksList,
} from "@/utils/examplesData";

export default function Page() {
  const [openModal, setOpenModal] = useState(false);

  const [openNotification1, setOpenNotification1] = useState(false);
  const [openNotification2, setOpenNotification2] = useState(false);
  const [openNotification3, setOpenNotification3] = useState(false);
  const [openNotification4, setOpenNotification4] = useState(false);
  const [openNotification5, setOpenNotification5] = useState(false);

  const linkListExample2 = [
    {
      linkText: "Compras",
      nestedLinks: [
        { linkText: "Compras", href: "/compras" },
        { linkText: "Ventas", href: "/ventas" },
      ],
    },
    {
      linkText: "2023",
      nestedLinks: [
        { linkText: "2025", href: "/compras/2025" },
        { linkText: "2024", href: "/compras/2024" },
        { linkText: "2023", href: "/compras/2023" },
        { linkText: "2022", href: "/compras/2022" },
        { linkText: "2021", href: "/compras/2021" },
        { linkText: "2020", href: "/compras/2020" },
      ],
    },
    {
      linkText: "Marzo",
      nestedLinks: [
        { linkText: "Enero", href: "/compras/2025/enero" },
        { linkText: "Febrero", href: "/compras/2025/febrero" },
        { linkText: "Marzo", href: "/compras/2025/marzo" },
        { linkText: "Abril", href: "/compras/2025/abril" },
        { linkText: "Mayo", href: "/compras/2025/mayo" },
        { linkText: "Junio", href: "/compras/2025/junio" },
        { linkText: "Julio", href: "/compras/2025/julio" },
        { linkText: "Agosto", href: "/compras/2025/agosto" },
        {
          linkText: "Septiembre",
          href: "/compras/2025/septiembre",
        },
        { linkText: "Octubre", href: "/compras/2025/octubre" },
        { linkText: "Noviembre", href: "/compras/2025/noviembre" },
        { linkText: "Diciembre", href: "/compras/2025/diciembre" },
      ],
    },
  ];

  const [selectedTableRow, setSelectedTableRow] = useState<{
    id: string | number;
    [key: string]: string | number;
  } | null>(null);
  const [selectedTableRows, setSelectedTableRows] = useState<
    (string | number)[] | null
  >(null);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  function rowEdit(id: string | number) {
    console.log("Edit: " + id);
    const obj = TABLE_ROWS.find((obj) => obj.id === id);
    if (obj) {
      setSelectedTableRow(obj);
    }
    setOpenModalEdit(true);
  }

  function rowDelete(id: string | number) {
    console.log("Delete: " + id);
    const obj = TABLE_ROWS.find((obj) => obj.id === id);
    if (obj) {
      setSelectedTableRow(obj);
    }
    setOpenModalDelete(true);
  }

  const [tableSearchTerm, setTableSearchTerm] = useState<string>("");
  return (
    <main style={{ margin: "1vh 2vw" }}>
      <Accordion label="Section 1" open>
        <p>{sampleText}</p>
      </Accordion>
      <Accordion label="Section 2">
        <p>{sampleText}</p>
      </Accordion>
      <Accordion label="Section 3">
        <p>{sampleText}</p>
      </Accordion>
      <AnimationLoading size="5vw" />
      <AnimationScrollDown size="5vw" />
      <h4 style={{ fontFamily: "monospace" }}>
        <AnimationText>{sampleTextSmall}</AnimationText>
      </h4>
      <h4>
        <AnimationTextGradient>sampleTextSmall</AnimationTextGradient>
      </h4>
      <Avatar name="Kriz" />
      <Avatar name="Kriz" size="3rem" />
      <Avatar name="Kriz" imgURL={"/img/400x400.webp"} />
      <Avatar name="Kriz" imgURL={"/img/400x400.webp"} size="3rem" />
      <Avatar color="orange" />
      <Avatar size="3rem" color="orange" />
      <Breadcrumb
        homeLink={{
          linkText: "Home",
          href: "/",
        }}
        linksList={linkListExample2}
      />
      <Button>Normal button</Button>
      <Button outline>Outline button</Button>
      <Button disabled>Disabled button</Button>
      <Button outline disabled>
        Disabled outline button
      </Button>
      <Button href="https://github.com/" target="_blank">
        Link button
      </Button>
      <Button outline disabled>
        <AnimationLoading color="hsl(var(--fontColorA))" />
      </Button>
      <Button disabled>
        <AnimationLoading color="hsl(var(--colorBackground))" /> Loading...
      </Button>
      <Card
        style={{
          maxWidth: "16rem",
          aspectRatio: "9/13",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <div>
          <h4>Consectetur</h4>
          <h5>Placeat optio</h5>
        </div>
        <Divider />
        <h6>Veniam labore</h6>
        <p>{sampleTextSmall}</p>
        <Divider />
        <Button>Button</Button>
      </Card>
      <Card
        style={{
          width: "16rem",
          aspectRatio: "9/13",
          gap: "0.5rem",
        }}
      >
        <img src={"/img/1600x800.webp"} alt="Card test" />
        <p>{sampleTextSmall}</p>
        <Button>Button</Button>
      </Card>
      <Divider parentPadding={"1rem"} stylized />
      <Drawer>
        <>
          <nav>
            <menu>
              {navigationLinksList.map((link) =>
                "nestedLinks" in link ? (
                  <SubMenu key={link.linkText} label={link.linkText}>
                    {link.nestedLinks.map((nestedLink) => (
                      <li key={nestedLink.linkText}>
                        <Link href={nestedLink.href}>
                          {nestedLink.linkText}
                        </Link>
                      </li>
                    ))}
                  </SubMenu>
                ) : (
                  <li key={link.linkText}>
                    <Link href={link.href}>{link.linkText}</Link>
                  </li>
                )
              )}
            </menu>
          </nav>

          <menu>
            <SubMenu label={"A"}>
              <li>
                <SelectorTheme />
              </li>
            </SubMenu>

            <SubMenu label={"B"}>
              <li>
                <SelectorLanguage />
              </li>
            </SubMenu>

            <li>
              <InputText type="search" labelText="Search" />
            </li>

            <SubMenu label={"Search"}>
              <li>
                <InputText type="search" labelText="Search" />
              </li>
            </SubMenu>
          </menu>
        </>
      </Drawer>
      <Footer
        logoText={"Kriz UI"}
        logoBelowContent={
          <>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto, similique.
            </p>
            <p>Argentina - Mendoza</p>
            <Link href="https://github.com/kriztiam">github.com/kriztiam</Link>
          </>
        }
        linksList={footerLinksList}
        footerBottomContent={
          <p>
            © 2025 KrizUI | Designed By:{" "}
            <Link href="https://github.com/kriztiam">Kriz</Link>
          </p>
        }
        socialMediaLinks={socialMediaLinksList}
      >
        <>
          <p style={{ textAlign: "center" }}>
            Receive all our news and updates
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
            }}
          >
            <InputText type="email" labelText="Email" />
            <Button>Subscribe</Button>
          </div>
        </>
      </Footer>
      <HelperGrid columnsNumber={3} gap="1rem">
        {Array.from({ length: 5 }, (_, index) => (
          <Card key={`grid1Card${index}`}>
            <p>{sampleText}</p>
          </Card>
        ))}
      </HelperGrid>
      <Card
        style={{
          width: "16rem",
          aspectRatio: "9/13",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <div>
          <HelperSkeleton text="h4" />
          <HelperSkeleton text="h5" />
        </div>
        <Divider />
        <HelperSkeleton text="h6" />

        <div>
          <HelperSkeleton text="p" color="orangered" />
          <HelperSkeleton text="p" color="orange" />
          <HelperSkeleton text="p" color="yellow" />
          <HelperSkeleton text="p" color="greenyellow" />
        </div>
        <Divider />
        <HelperSkeleton height="2.25rem" />
      </Card>
      <ImageCarousel
        height="30rem"
        srcArray={[
          "/img/2560x1440.webp",
          "/img/2520x1080.webp",
          "/img/1600x800.webp",
          "/img/1400x1000.webp",
          "/img/1200x800.webp",
          "/img/800x600.webp",
          "/img/720x1280.webp",
          "/img/400x400.webp",
        ]}
      />
      <ImageGrid
        srcArray={[
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
          "/img/1400x1000.webp",
          "/img/1200x800.webp",
          "/img/2560x1440.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
        ]}
        altArray={[
          "ImageGrid test image 1",
          "ImageGrid test image 2",
          "ImageGrid test image 3",
          "ImageGrid test image 4",
          "ImageGrid test image 5",
          "ImageGrid test image 6",
          "ImageGrid test image 7",
          "ImageGrid test image 8",
          "ImageGrid test image 9",
          "ImageGrid test image 10",
        ]}
        sizeEachImage="15vw"
      />
      <ImageViewer
        src="/img/720x1280.webp"
        alt="ImageViewer test image 2"
        size="10rem"
      />
      <InputCheckbox id={"checkbox"} />
      <InputCheckbox
        id={"checkbox3"}
        labelText="Checkbox default checked"
        defaultChecked
      />
      <InputCheckbox id={"checkbox5"} labelText="Checkbox disabled" disabled />
      <InputColor
        defaultValue={"#7b3b8c"}
        listOptions={["#ff0000", "#00ff00", "#0000ff"]}
      />
      <InputRadio groupName="Units" labelText="px" />
      <InputRadio groupName="Units" labelText="em" />
      <InputRadio groupName="Units" labelText="rem" />
      <InputRadio groupName="Units" labelText="vmax" />
      <InputRange
        labelText="Limited range 2"
        min={200}
        max={1000}
        valuePrefix={"$"}
      />
      <InputRange
        labelText="Limited range 3"
        min={1}
        max={50}
        initialValue={11}
        valueSuffix={"Km"}
      />
      <InputRangeDual
        labelText="Limited dual range with step"
        min={50}
        max={100}
        step={0.1}
      />{" "}
      <InputRangeDual
        labelText="Limited dual range 2"
        min={1}
        max={50}
        initialValueMin={10}
        initialValueMax={25}
        valueSuffix={"Km"}
      />
      <InputSelect
        id="select2"
        options={STRINGS_ARRAY}
        labelText="Select one with disabled elements"
        disabledElements={["Coral", "Red", "Blue", "Orange", "Grey", "Rust"]}
      />
      <InputSelectMultiple
        labelText="Select some options with disabled elements"
        options={STRINGS_ARRAY}
        disabledElements={["Coral", "Red", "Blue", "Orange", "Grey", "Rust"]}
      />
      <InputText labelText="Input type='Text'" />
      <InputText labelText="Input type='Search'" type="search" />
      <InputText labelText="Input type='Email'" type="email" />
      <InputText labelText="Input type='Password'" type="password" />
      <InputText labelText="Input type='Number'" type="number" />
      <InputText labelText="Input type='Date'" type="date" />
      <InputText
        labelText="Input type='Datetime-local'"
        type="datetime-local"
      />
      <InputText labelText="Input type='Month'" type="month" />
      <InputText labelText="Input type='Time'" type="time" />
      <InputText labelText="Input type='Week'" type="week" />
      <Card>
        <Login />
      </Card>
      <Menu label={"Theme"} menuWidth="7.5em">
        <li>
          <SelectorTheme />
        </li>
      </Menu>
      <Menu label={"Account"}>
        <li>Profile</li>
        <li>Messages</li>
        <li>
          <Divider />
        </li>
        <li>Settings</li>
        <li>
          <Divider />
        </li>
        <li>Log out</li>
      </Menu>
      <Menu menuWidth="7.5em">
        <li>Profile</li>
        <li>Messages</li>
        <li>
          <Divider />
        </li>
        <li>
          <SelectorLanguage />
        </li>
        <li>
          <Divider />
        </li>

        <li>
          <SelectorTheme />
        </li>
        <li>
          <Divider />
        </li>
        <li>Log out</li>
      </Menu>
      <Menu label={"SubMenus"}>
        <li>Profile</li>
        <li>Messages</li>
        <li>
          <Divider />
        </li>
        <li>Settings</li>
        <li>
          <Divider />
        </li>
        <li>Log out</li>

        <SubMenu label="SubMenu 1">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <SubMenu label="SubMenu 2">
            <li>Option 4</li>
            <li>Option 5</li>
            <li>Option 6</li>
            <li>Option 7</li>
          </SubMenu>
        </SubMenu>
      </Menu>
      <Button onClick={() => setOpenModal(true)}>Open modal</Button>
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <Login />
      </Modal>
      <NavigationBar logoText={"Kriz UI"} linksList={navigationLinksList} />
      <NavigationBarBottom
        linksInBar={[
          ...navigationBottomLinksList,
          { href: "/a", linkText: "No icon" },
        ]}
        showIconLabel
        linksList={navigationLinksList}
      />
      <Button onClick={() => setOpenNotification1(true)}>
        Test normal notification
      </Button>
      <Notification
        type="normal"
        message="This is a normal notification."
        open={openNotification1}
        setOpen={setOpenNotification1}
        position="left"
      />
      <Button onClick={() => setOpenNotification2(true)}>
        Test info notification
      </Button>
      <Notification
        type="info"
        message="This is a info notification."
        open={openNotification2}
        setOpen={setOpenNotification2}
      />{" "}
      <Button onClick={() => setOpenNotification3(true)}>
        Test success notification
      </Button>
      <Notification
        type="success"
        message="This is a success notification."
        open={openNotification3}
        setOpen={setOpenNotification3}
        position="right"
      />
      <Button onClick={() => setOpenNotification4(true)}>
        Test warning notification
      </Button>
      <Notification
        type="warning"
        message="This is a warning notification."
        open={openNotification4}
        setOpen={setOpenNotification4}
        fromBottom
        position="left"
      />
      <Button onClick={() => setOpenNotification5(true)}>
        Test error notification
      </Button>
      <Notification
        type="error"
        message="This is a error notification."
        open={openNotification5}
        setOpen={setOpenNotification5}
        fromBottom
      />
      <NotificationCard type="error" notificationTitle="Page not found">
        <h3>Text text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <Button>Test button</Button>
      </NotificationCard>
      <NotificationCard
        type="info"
        notificationTypeLabel="Información"
        notificationTitle="Remember"
      >
        <h3>Text text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <Button>Test button</Button>
      </NotificationCard>
      <NotificationCard type="normal" notificationTitle="Welcome">
        <h3>Text text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <Button>Test button</Button>
      </NotificationCard>
      <NotificationCard
        type="success"
        notificationTitle="Files uploaded"
        fullScreen
      >
        <h3>Text text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <Button>Test button</Button>
      </NotificationCard>
      <NotificationCard
        type="warning"
        notificationTitle="This action cant be undone"
        fullScreen
      >
        <h3>Text text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          veritatis?
        </p>
        <Button>Test button</Button>
      </NotificationCard>
      <Pagination maxPages={10} />
      <Pagination maxPages={10} defaultPage={7} hideLastButton />
      <Pagination maxPages={10} defaultPage={7} hideNextButton />
      <Pagination maxPages={10} hideLastButton hideNextButton />{" "}
      <Pagination maxPages={100} defaultPage={30} />
      <Pagination maxPages={10} defaultPage={5} size="0.75rem" />
      <Pagination maxPages={10} defaultPage={5} />
      <Pagination maxPages={10} defaultPage={5} size="1.25rem" />
      <SelectorLanguage />
      <SelectorTheme customColor />
      <SocialMediaLinks socialMediaLinks={socialMediaLinksList} showText />
      <Modal isOpen={openModalDelete} setIsOpen={setOpenModalDelete}>
        <p>
          Are you sure you want to delete {JSON.stringify(selectedTableRow)} ?
        </p>
        <Divider />
        <div style={{ display: "flex", marginTop: "0.5rem", gap: "0.5rem" }}>
          <Button
            onClick={() => setOpenModalDelete(false)}
            color="hsl(var(--colorError))"
          >
            Yes
          </Button>
          <Button onClick={() => setOpenModalDelete(false)}>No</Button>
        </div>
      </Modal>
      <Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
        {selectedTableRow && (
          <div>
            {JSON.stringify(selectedTableRow)}
            {Object.entries(selectedTableRow).map(([key, value]) => (
              <InputText
                key={`editTableRow-${key}`}
                labelText={key.charAt(0).toUpperCase() + key.slice(1)}
                defaultValue={String(value)}
              />
            ))}
          </div>
        )}
        <Divider />
        <div style={{ display: "flex", marginTop: "0.5rem", gap: "0.5rem" }}>
          <Button onClick={() => setOpenModalEdit(false)}>Save</Button>
          <Button onClick={() => setOpenModalEdit(false)} outline>
            Cancel
          </Button>
        </div>
      </Modal>
      <InputText
        type="search"
        labelText="Search in table"
        onChange={setTableSearchTerm}
      />
      <Table
        tableData={TABLE_ROWS}
        checkboxSelection
        rowEditFunction={rowEdit}
        rowDeleteFunction={rowDelete}
        setSelectedTableRows={setSelectedTableRows}
        searchTerm={tableSearchTerm}
      />
      <output>SelectedTableRowsIds: {JSON.stringify(selectedTableRows)}</output>
      <Tabs
        tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}
        tabsContent={[
          <div key={"tab1"}>
            <p>{sampleTextSmall}</p>
          </div>,

          <div key={"tab2"}>
            <p>{sampleText}</p>
          </div>,

          <div key={"tab3"}>
            <p>
              {sampleText} {sampleTextSmall}
            </p>
          </div>,
        ]}
      />
      <Tabs
        fillEmptySpace
        tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}
        tabsContent={[
          <div key={"tab1"}>
            <p>{sampleTextSmall}</p>
          </div>,

          <div key={"tab2"}>
            <p>{sampleText}</p>
          </div>,

          <div key={"tab3"}>
            <p>
              {sampleText} {sampleTextSmall}
            </p>
          </div>,
        ]}
      />
      <Tooltip tooltipText="You don't have permission to do this">
        <Button disabled>Button</Button>
      </Tooltip>
      <Tooltip tooltipText="This is your avatar">
        <Avatar name="K" size="2.25rem" />
      </Tooltip>
      <Tooltip tooltipText="Change theme">
        <Menu label={"Brush"} menuWidth="7.5em">
          <li>
            <SelectorTheme />
          </li>
        </Menu>
      </Tooltip>
      <Tooltip tooltipText="You don't have permission to do this">
        <Button disabled>Button</Button>
      </Tooltip>
      <div>
        <IconCalendar />
        <IconCheck />
        <IconClock />
        <IconSun />

        <IconBrush />
        <IconGlobe />
        <IconGear />

        <IconLeft />
        <IconRight />
        <IconUp />
        <IconDown />
        <IconFirst />
        <IconLast />
      </div>
    </main>
  );
}
