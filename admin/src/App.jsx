import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuthLayout from "./layouts/AuthLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ClientLayout from "./layouts/ClientLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import ClientDashboard from "./pages/client/ClientDashboard.jsx";
import Projects from "./pages/client/Projects.jsx";
import ClientAnalytics from "./pages/client/Analytics.jsx";
import Billing from "./pages/client/Billing.jsx";
import Deployment from "./pages/client/Deployment.jsx";
import ClientSettings from "./pages/client/Settings.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import UsersManagement from "./pages/admin/UsersManagement.jsx";
import ProjectsManagement from "./pages/admin/ProjectsManagement.jsx";
import Analytics from "./pages/admin/Analytics.jsx";
import Revenue from "./pages/admin/Revenue.jsx";
import AdminSettings from "./pages/admin/Settings.jsx";
import Skeleton from "./components/loaders/Skeleton.jsx";
import Toast from "./components/ui/Toast.jsx";
import ProjectDetailsModal from "./components/modals/ProjectDetailsModal.jsx";
import EditProjectModal from "./components/modals/EditProjectModal.jsx";
import ConfirmModal from "./components/modals/ConfirmModal.jsx";
import DeploymentModal from "./components/modals/DeploymentModal.jsx";
import EditUserModal from "./components/modals/EditUserModal.jsx";
import { initialProjects } from "./data/mockProjects.js";
import { initialUsers } from "./data/mockUsers.js";

export default function App() {
  const [role, setRole] = useState(null);
  const [clientTab, setClientTab] = useState("Dashboard");
  const [adminTab, setAdminTab] = useState("Dashboard");
  const [projects, setProjects] = useState(initialProjects);
  const [users, setUsers] = useState(initialUsers);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [deployingProject, setDeployingProject] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [toast, setToast] = useState("");
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleLogin = (nextRole) => {
    setSwitching(true);
    setTimeout(() => {
      setRole(nextRole);
      setSwitching(false);
    }, 350);
  };

  const handleProjectAction = (action, project) => {
    if (action === "view") setSelectedProject(project);
    if (action === "edit") setEditingProject(project);
    if (action === "hide") {
      setHiddenIds((ids) => [...ids, project.id]);
      setToast(`${project.name} hidden from dashboard`);
    }
    if (action === "block") {
      setConfirm({
        title: "Block project",
        message: `Block ${project.name}? It will remain visible but appear disabled.`,
        onConfirm: () => {
          setProjects((items) => items.map((item) => item.id === project.id ? { ...item, status: "Blocked" } : item));
          setConfirm(null);
          setToast(`${project.name} blocked`);
        },
      });
    }
    if (action === "deploy") setDeployingProject(project);
    if (action === "delete") {
      setConfirm({
        title: "Delete project",
        message: `Delete ${project.name}? This removes it from the interface immediately.`,
        danger: true,
        onConfirm: () => {
          setProjects((items) => items.filter((item) => item.id !== project.id));
          setConfirm(null);
          setToast(`${project.name} deleted`);
        },
      });
    }
  };

  const clientPage = useMemo(() => {
    if (clientTab === "Dashboard") return <ClientDashboard projects={projects.filter((project) => !hiddenIds.includes(project.id))} />;
    if (clientTab === "Projects") return <Projects projects={projects} hiddenIds={hiddenIds} onAction={handleProjectAction} />;
    if (clientTab === "Analytics") return <ClientAnalytics />;
    if (clientTab === "Billing") return <Billing projects={projects} />;
    if (clientTab === "Deployments") return <Deployment projects={projects} />;
    return <ClientSettings />;
  }, [clientTab, projects, hiddenIds]);

  const handleUserAction = (action, user) => {
    if (action === "edit") setEditingUser(user);
    if (action === "ban") setUsers((items) => items.map((item) => item.id === user.id ? { ...item, status: "Banned" } : item));
    if (action === "activate") setUsers((items) => items.map((item) => item.id === user.id ? { ...item, status: "Active" } : item));
    if (action === "deactivate") setUsers((items) => items.map((item) => item.id === user.id ? { ...item, status: "Inactive" } : item));
    if (action === "delete") {
      setConfirm({
        title: "Delete user",
        message: `Delete ${user.name}? This removes the profile from the table.`,
        danger: true,
        onConfirm: () => {
          setUsers((items) => items.filter((item) => item.id !== user.id));
          setConfirm(null);
          setToast(`${user.name} deleted`);
        },
      });
    }
  };

  const adminPage = useMemo(() => {
    if (adminTab === "Dashboard") return <AdminDashboard />;
    if (adminTab === "Users") return <UsersManagement users={users} onAction={handleUserAction} />;
    if (adminTab === "Projects") return <ProjectsManagement projects={projects} hiddenIds={hiddenIds} onAction={handleProjectAction} />;
    if (adminTab === "Analytics") return <Analytics />;
    if (adminTab === "Revenue") return <Revenue />;
    return <AdminSettings />;
  }, [adminTab, users, projects, hiddenIds]);

  const saveProject = (updated) => {
    setProjects((items) => items.map((item) => item.id === updated.id ? updated : item));
    setEditingProject(null);
    setToast(`${updated.name} updated`);
  };

  const saveUser = (updated) => {
    setUsers((items) => items.map((item) => item.id === updated.id ? updated : item));
    setEditingUser(null);
    setToast(`${updated.name} updated`);
  };

  const completeDeployment = () => {
    if (!deployingProject) return;
    setProjects((items) => items.map((item) => item.id === deployingProject.id ? { ...item, deployment: "Live", progress: 100 } : item));
    setToast(`${deployingProject.name} is live`);
    setDeployingProject(null);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!role ? (
          <motion.div key="auth" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AuthLayout>
              {switching ? (
                <div className="glass rounded-3xl p-7">
                  <Skeleton className="h-7 w-40" />
                  <Skeleton className="mt-5 h-12 w-full" />
                  <Skeleton className="mt-3 h-12 w-full" />
                  <Skeleton className="mt-6 h-12 w-full" />
                </div>
              ) : (
                <Login onLogin={handleLogin} />
              )}
            </AuthLayout>
          </motion.div>
        ) : role === "Admin" ? (
          <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AdminLayout activeTab={adminTab} onChange={setAdminTab} onLogout={() => setRole(null)}>
              {adminPage}
            </AdminLayout>
          </motion.div>
        ) : (
          <motion.div key="client" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ClientLayout activeTab={clientTab} onChange={setClientTab} onLogout={() => setRole(null)}>
              {clientPage}
            </ClientLayout>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <EditProjectModal project={editingProject} onClose={() => setEditingProject(null)} onSave={saveProject} />
      <DeploymentModal project={deployingProject} onClose={() => setDeployingProject(null)} onComplete={completeDeployment} />
      <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onSave={saveUser} />
      <ConfirmModal
        open={Boolean(confirm)}
        title={confirm?.title}
        message={confirm?.message}
        danger={confirm?.danger}
        onCancel={() => setConfirm(null)}
        onConfirm={confirm?.onConfirm}
      />
      <Toast message={toast} />
    </>
  );
}
